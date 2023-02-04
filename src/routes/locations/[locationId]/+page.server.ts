import { updateLocationSchema } from "$lib/schemas";
import { PrismaClient } from "@prisma/client";
import { fail, redirect, type Load } from "@sveltejs/kit";
import type { Actions } from "./$types";

const prisma = new PrismaClient();

const defaultLocationSelect = {
	id: true,
	name: true,
};

export const load: Load = async ({ params }) => {
	const location = await prisma.location.findUnique({
		where: {
			id: params.locationId,
		},
		select: defaultLocationSelect,
	});

	if (!location) {
		throw redirect(302, "/locations");
	}

	return {
		location,
	};
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();
		const formValues = Object.fromEntries(formData.entries());

		const validation = updateLocationSchema.safeParse(formValues);

		if (!validation.success) {
			const errors = {
				fieldErrors: validation.error.flatten().fieldErrors,
				formErrors: validation.error.flatten().formErrors,
			};

			return fail(400, errors);
		}

		const location = await prisma.location.update({
			where: {
				id: params.locationId,
			},
			data: validation.data,
		});

		if (location) {
			throw redirect(302, "/locations");
		}
	},
};
