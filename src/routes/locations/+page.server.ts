import { PrismaClient } from "@prisma/client";
import type { Load } from "@sveltejs/kit";

const prisma = new PrismaClient();

export const load: Load = async () => {
	return {
		locations: await prisma.location.findMany(),
	};
};
