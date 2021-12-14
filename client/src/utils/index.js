import moment from "moment";

export const isToday = (date) => {
	if (date === undefined) return false;

	const d = moment(date);
	const today = moment(new Date());

	if (d.isSame(today, "day")) {
		return d.toISOString();
	}

	return false;
};

export const isSameDay = (d1, d2) => {
	const date1 = moment(d1);
	const date2 = moment(d2);

	if (date1.isSame(date2, "day")) return true;
	return false;
};
