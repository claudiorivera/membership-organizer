import { z } from "zod";

export const updateEvent = z.object({
	title: z.string().min(1, "Title must not be blank").optional(),
	description: z
		.string()
		.min(5, "Description must be at least 5 characters")
		.optional(),
});
