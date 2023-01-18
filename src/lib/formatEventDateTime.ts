export const formatEventDateTime = ({
	startDateTime,
	endDateTime,
}: {
	startDateTime: Date;
	endDateTime?: Date | null;
}) => {
	const startDate = formatDate(startDateTime);
	const startTime = formatTime(startDateTime);

	if (!endDateTime) return `${startDate} at ${startTime}`;

	const endDate = formatDate(endDateTime);
	const endTime = formatTime(endDateTime);

	if (startDate === endDate) return `${startDate} at ${startTime} - ${endTime}`;

	return `${startDate} at ${startTime} - ${endDate} at ${endTime}`;
};

const formatDate = (date: Date) =>
	date.toLocaleDateString("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

const formatTime = (date: Date) =>
	date.toLocaleTimeString("en-us", {
		timeStyle: "short",
	});
