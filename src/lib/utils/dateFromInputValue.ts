import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.guess();

export const dateFromInputValue = (formValue: FormDataEntryValue) => {
	const dateTime =
		typeof formValue === "string" && !!formValue.length
			? formValue
			: dayjs().format("YYYY-MM-DDTHH:mm");

	return dayjs(dateTime).utc().toDate();
};
