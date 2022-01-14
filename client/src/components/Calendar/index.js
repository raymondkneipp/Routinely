import React from "react";
import moment from "moment";
import Day from "./Day";

const Calendar = ({
	showTasks,
	showWater,
	showJournals,
	numOfDays = 5,
	offset = 0,
}) => {
	var days = [];
	const maxFutureDays = 1;
	var futureDays = 0;
	var prevDays = 0;

	while (days.length < numOfDays) {
		if (days.length === 0) {
			days.push(moment());
		}

		if (futureDays < maxFutureDays) {
			days.push(moment().add(futureDays + 1, "days"));
			futureDays += 1;
		}

		if (days.length < numOfDays) {
			days.unshift(moment().subtract(prevDays + 1, "days"));
			prevDays += 1;
		}
	}

	if (offset !== 0) {
		days.map((item) => item.subtract(offset * numOfDays, "days"));
	}

	return (
		<div className="flex flex-col md:flex-row">
			{days.map((day) => (
				<Day
					date={day}
					key={day}
					showTasks={showTasks}
					showWater={showWater}
					showJournals={showJournals}
				/>
			))}
		</div>
	);
};

export default Calendar;
