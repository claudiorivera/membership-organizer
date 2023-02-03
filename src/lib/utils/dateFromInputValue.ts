import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const dateFromInputValues = (value: string, utcOffset: number) => {
	const dateTime = value.length ? value : dayjs().format("YYYY-MM-DDTHH:mm");

	return dayjs(dateTime).utcOffset(utcOffset).toDate();
};
