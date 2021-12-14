import React from "react";
import {
	Water,
	Header,
	Calendar,
	Card,
	ListTasks,
	Greeting,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListUl } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
	return (
		<>
			<Header
				large
				icon={<FontAwesomeIcon icon={faHome} size="lg" />}
				title="Overview"
			/>

			<Card>
				<Greeting />
				<Calendar showTasks showWater />
			</Card>

			<Card>
				<Header
					icon={<FontAwesomeIcon icon={faListUl} />}
					title="Daily Tasks"
				/>
				<ListTasks simplified />
			</Card>

			<Water />
		</>
	);
};

export default Dashboard;
