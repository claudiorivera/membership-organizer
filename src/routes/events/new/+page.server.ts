import { createEventSchema } from "$lib/schemas";
import { dateFromInputValues } from "$lib/utils/dateFromInputValue";
import { PrismaClient } from "@prisma/client";
import { fail, redirect, type Load } from "@sveltejs/kit";
import type { Actions } from "./$types";

const prisma = new PrismaClient();

export const load: Load = async () => {
	const locations = await prisma.location.findMany({
		select: {
			id: true,
			name: true,
		},
	});

	return {
		locationOptions: locations.map((location) => ({
			value: location.id,
			label: location.name,
		})),
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const formValues = Object.fromEntries(formData.entries());
		const parsedStartDateTime = dateFromInputValues(
			formValues.startDateTime.toString(),
		);

		const validation = createEventSchema.safeParse({
			...formValues,
			startDateTime: parsedStartDateTime,
		});

		if (!validation.success) {
			const errors = {
				fieldErrors: validation.error.flatten().fieldErrors,
				formErrors: validation.error.flatten().formErrors,
			};

			return fail(400, errors);
		}

		const event = await prisma.event.create({
			data: validation.data,
		});

		if (event) {
			throw redirect(302, "/");
		}
	},
};
