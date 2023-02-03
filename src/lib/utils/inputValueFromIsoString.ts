const pad = (num: number) => (num < 10 ? `0${num}` : num);

export const inputValueFromIsoString = (isoString: string): string => {
	const date = new Date(isoString);
	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());

	const inputValue = `${year}-${month}-${day}T${hours}:${minutes}`;

	console.log({ isoString, inputValue });

	return inputValue;
};
