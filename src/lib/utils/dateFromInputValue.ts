export const dateFromInputValues = (value: string, utcOffset: number) => {
	const date = new Date(`${value}Z`);

	date.setMinutes(date.getMinutes() + utcOffset);

	console.log({ value, utcOffset, date });

	return date;
};
