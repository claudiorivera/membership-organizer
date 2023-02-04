import { updateEventSchema } from "$lib/schemas";
import { PrismaClient } from "@prisma/client";
import { fail, redirect, type Load } from "@sveltejs/kit";
import type { Actions } from "./$types";

const prisma = new PrismaClient();

const defaultEventSelect = {
	id: true,
	title: true,
	description: true,
	locationId: true,
	startDateTime: true,
};

export const load: Load = async ({ params }) => {
	const event = await prisma.event.findUnique({
		where: {
			id: params.eventId,
		},
		select: defaultEventSelect,
	});

	if (!event) {
		throw redirect(302, "/");
	}

	const locations = await prisma.location.findMany({
		select: {
			id: true,
			name: true,
		},
	});

	return {
		event,
		locationOptions: locations.map((location) => ({
			value: location.id,
			label: location.name,
		})),
	};
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();
		const formValues = Object.fromEntries(formData.entries());

		const validation = updateEventSchema.safeParse(formValues);

		if (!validation.success) {
			const errors = {
				fieldErrors: validation.error.flatten().fieldErrors,
				formErrors: validation.error.flatten().formErrors,
			};

			return fail(400, errors);
		}

		const data = {
			...validation.data,
			utcOffset: undefined,
		};

		const event = await prisma.event.update({
			where: {
				id: params.eventId,
			},
			data,
		});

		if (event) {
			throw redirect(302, "/");
		}
	},
};
