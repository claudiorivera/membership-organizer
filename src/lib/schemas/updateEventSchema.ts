import { z } from "zod";

export const updateEventSchema = z.object({
	title: z.string().min(1, "Required").optional(),
	description: z
		.string()
		.min(5, "Description must be at least 5 characters")
		.optional(),
	locationId: z
		.string({
			invalid_type_error: "Required",
		})
		.cuid()
		.optional(),
	startDateTime: z
		.date({
			invalid_type_error: "Required",
		})
		.optional(),
});