import { createEventSchema } from "$lib";
import { PrismaClient } from "@prisma/client";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

const prisma = new PrismaClient();

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = createEventSchema.safeParse({
			title: formData.get("title"),
			description: formData.get("description"),
			locationId: formData.get("locationId"),
			startDateTime: formData.get("startDateTime"),
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