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
	startDateTime: z.date({
		invalid_type_error: "Required",
	}),
});
