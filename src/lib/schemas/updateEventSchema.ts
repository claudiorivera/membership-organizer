import { z } from "zod";

export const updateEventSchema = z
	.object({
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
			.string()
			.regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)
			.optional(),
		utcOffset: z.string(),
	})
	.optional();
