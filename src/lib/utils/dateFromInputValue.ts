import dayjs from "dayjs";

export const dateFromInputValues = (value: string) => {
	const dateTime = value.length ? value : dayjs().format("YYYY-MM-DDTHH:mm");

	return dayjs(dateTime).toDate();
};
