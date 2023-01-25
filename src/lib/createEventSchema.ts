import { z } from "zod";

export const createEventSchema = z.object({
	title: z.string().min(1),
	description: z
		.string()
		.min(5, "Description must be at least 5 characters long"),
	locationId: z.string().cuid(),
	startDateTime: z.string().datetime(),
});
