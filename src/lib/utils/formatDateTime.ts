export const formatDateTime = (dateTime: Date) => {
	const parsedDate = dateTime.toLocaleString(undefined, {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	});

	return parsedDate;
};
