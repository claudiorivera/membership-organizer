import { updateEvent } from "$lib/schemas/updateEvent";
import { PrismaClient } from "@prisma/client";
import { fail, type Load } from "@sveltejs/kit";
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

		const validation = updateEvent.safeParse({
			title: formData.get("title"),
			description: formData.get("description"),
		});

		if (!validation.success) {
			const errors = {
				fieldErrors: validation.error.flatten().fieldErrors,
				formErrors: validation.error.flatten().formErrors,
			};

			console.log({ errors });

			return fail(400, errors);
		}

		await prisma.event.update({
			where: {
				id: params.eventId,
			},
			data: validation.data,
		});
	},
};
