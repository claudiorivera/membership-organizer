import { PrismaClient } from "@prisma/client";
import type { Load } from "@sveltejs/kit";
import { z } from "zod";
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

const eventUpdateSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
});

export const actions: Actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();

		const data = eventUpdateSchema.parse({
			title: formData.get("title"),
			description: formData.get("description"),
		});

		await prisma.event.update({
			where: {
				id: params.eventId,
			},
			data,
		});
	},
};
