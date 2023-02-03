export const dateFromInputValues = (value?: string, utcOffset?: number) => {
	console.log({ value, utcOffset });

	if (!value || !utcOffset) return new Date().toISOString();

	const date = new Date(`${value}Z`);

	date.setMinutes(date.getMinutes() + utcOffset);

	console.log({ date: date.toISOString() });

	return date.toISOString();
};
