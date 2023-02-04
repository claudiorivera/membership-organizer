const pad = (num: number) => (num < 10 ? `0${num}` : num);

export const inputValueFromDate = (date: Date) => {
	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());
	const hour = pad(date.getHours());
	const minute = pad(date.getMinutes());

	return `${year}-${month}-${day}T${hour}:${minute}`;
};
