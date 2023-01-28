export const formatDateTime = (dateTime: Date) =>
	dateTime.toLocaleString(undefined, {
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
	});
