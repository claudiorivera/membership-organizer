export const formatIsoString = (isoString: string): string => {
	const date = new Date(isoString);

	const parsedDate = date.toLocaleString(undefined, {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	});

	return parsedDate;
};
