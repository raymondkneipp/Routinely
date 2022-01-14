import React from "react";
import { Header, Calendar, Card } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const CalendarPage = () => {
	return (
		<>
			<Header
				large
				icon={<FontAwesomeIcon icon={faCalendarAlt} size="lg" />}
				title="Calendar"
			/>

			<Card>
				<Calendar showTasks showWater showJournals numOfDays={7} offset={2} />

				<Calendar showTasks showWater showJournals numOfDays={7} offset={1} />

				<Calendar showTasks showWater showJournals numOfDays={7} />
			</Card>
		</>
	);
};

export default CalendarPage;
