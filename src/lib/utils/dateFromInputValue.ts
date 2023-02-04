export const dateFromInputValues = (value: string, utcOffset: number) => {
	const date = new Date(`${value}Z`);

	date.setMinutes(date.getMinutes() + utcOffset);

	return date;
};
