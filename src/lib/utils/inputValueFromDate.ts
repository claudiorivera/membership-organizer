export const inputValueFromDate = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const monthString = month < 10 ? `0${month}` : month;
	const dayString = day < 10 ? `0${day}` : day;
	const hoursString = hours < 10 ? `0${hours}` : hours;
	const minutesString = minutes < 10 ? `0${minutes}` : minutes;

	return `${year}-${monthString}-${dayString}T${hoursString}:${minutesString}`;
};
