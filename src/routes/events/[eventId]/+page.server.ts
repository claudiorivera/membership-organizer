import { updateEventSchema } from "$lib";
import { PrismaClient } from "@prisma/client";
import { fail, redirect, type Load } from "@sveltejs/kit";
import type { Actions } from "./$types";

const prisma = new PrismaClient();

export const load: Load = async ({ params }) => {
	return {
		event: await prisma.event.findUnique({
			where: {
				id: params.eventId,
			},
		}),
	};
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();

		const formValues = {
			title: formData.get("title"),
			description: formData.get("description"),
		};

		const validation = updateEventSchema.safeParse(formValues);

		if (!validation.success) {
			const errors = {
				fieldErrors: validation.error.flatten().fieldErrors,
				formErrors: validation.error.flatten().formErrors,
			};

			return fail(400, errors);
		}

		const event = await prisma.event.update({
			where: {
				id: params.eventId,
			},
			data: validation.data,
		});

		if (event) {
			throw redirect(302, "/");
		}
	},
};
