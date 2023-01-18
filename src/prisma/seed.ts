import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { faker } from "@faker-js/faker";

import { capitalizeEveryWord } from "../lib";

const NUMBER_OF_EVENTS = 3;

export const seed = async () => {
	await prisma.event.deleteMany();
	await prisma.location.deleteMany();

	for (let i = 0; i < NUMBER_OF_EVENTS; i++) {
		const startDateTime = faker.date.soon(60);
		const endDateTime = new Date(
			startDateTime.getTime() +
				1000 * 60 * 60 * faker.datatype.number({ min: 1, max: 4 }),
		);

		await prisma.event.create({
			data: {
				title: capitalizeEveryWord(faker.lorem.words()),
				description: faker.lorem.paragraph(),
				location: {
					create: {
						title: faker.address.cityName(),
						streetAddress: faker.address.streetAddress(),
						city: faker.address.city(),
						state: faker.address.stateAbbr(),
						postalCode: faker.address.zipCode(),
						description: faker.lorem.paragraph(),
					},
				},
				startDateTime,
				endDateTime,
				imageUrl: faker.image.abstract(),
				isCancelled: faker.datatype.boolean(),
			},
		});
	}
};

seed()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
