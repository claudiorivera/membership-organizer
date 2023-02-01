import dayjs from "dayjs";

export const dateFromInputValue = (formValue: FormDataEntryValue) => {
	const dateTime =
		typeof formValue === "string" && !!formValue.length
			? formValue
			: dayjs().format("YYYY-MM-DDTHH:mm");

	return dayjs(dateTime).toDate();
};
