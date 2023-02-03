import { z } from "zod";

export const createEventSchema = z.object({
	title: z.string().min(1, "Required"),
	description: z
		.string()
		.min(5, "Description must be at least 5 characters long"),
	locationId: z
		.string({
			invalid_type_error: "Required",
		})
		.cuid(),
	startDateTime: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/),
	utcOffset: z.string(),
});
