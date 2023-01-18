import type { Actions } from "./$types";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { fail } from "@sveltejs/kit";

const prisma = new PrismaClient();

const eventUpdateSchema = z.object({
	title: z.string().min(1),
	description: z.string(),
	locationId: z.string().cuid(),
	startDateTime: z.string().datetime(),
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = eventUpdateSchema.safeParse({
			title: formData.get("title"),
			description: formData.get("description"),
			locationId: formData.get("locationId"),
			startDateTime: formData.get("startDateTime"),
		});

		if (!validation.success) {
			return fail(400, {
				fieldErrors: validation.error.flatten().fieldErrors,
				formErrors: validation.error.flatten().formErrors,
			});
		}

		await prisma.event.create({
			data: validation.data,
		});
	},
};
