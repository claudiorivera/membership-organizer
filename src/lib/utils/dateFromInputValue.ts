export const dateFromInputValue = (value: FormDataEntryValue) => {
	if (typeof value !== "string" || !value.length) return new Date();

	const [dateString, timeString] = value.split("T");

	const [year, month, day] = dateString.split("-");
	const [hours, minutes] = timeString.split(":");

	return new Date(
		parseInt(year),
		parseInt(month) - 1,
		parseInt(day),
		parseInt(hours),
		parseInt(minutes),
	);
};
