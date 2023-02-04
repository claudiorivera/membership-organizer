import { createLocationSchema } from "$lib/schemas";
import { PrismaClient } from "@prisma/client";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

const prisma = new PrismaClient();

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const formValues = Object.fromEntries(formData.entries());

		const validation = createLocationSchema.safeParse(formValues);

		if (!validation.success) {
			const errors = {
				fieldErrors: validation.error.flatten().fieldErrors,
				formErrors: validation.error.flatten().formErrors,
			};

			return fail(400, errors);
		}

		const location = await prisma.location.create({
			data: validation.data,
		});

		if (location) {
			throw redirect(302, "/locations");
		}
	},
};
