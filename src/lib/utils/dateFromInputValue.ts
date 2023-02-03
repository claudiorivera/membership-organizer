import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const dateFromInputValues = (value: string, utcOffset: number) => {
	const dateTime = value.length ? value : dayjs().format("YYYY-MM-DDTHH:mm");

	const date = dayjs(dateTime).utcOffset(utcOffset).toDate();

	console.log({ date, value, utcOffset });

	return date;
};
