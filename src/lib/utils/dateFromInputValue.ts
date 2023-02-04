export const dateFromInputValues = (value?: string, utcOffset?: number) => {
	if (!value || !utcOffset) return new Date().toISOString();

	const date = new Date(`${value}Z`);

	date.setMinutes(date.getMinutes() + utcOffset);

	return date.toISOString();
};
