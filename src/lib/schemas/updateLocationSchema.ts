import { z } from "zod";

export const updateLocationSchema = z.object({
	name: z.string().min(1, "Required").optional(),
});
