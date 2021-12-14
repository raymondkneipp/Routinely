import React from "react";
import { Header, ListTasks, CreateTask, Card, Calendar } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

const TasksPage = () => {
	return (
		<>
			<Header
				large
				icon={<FontAwesomeIcon icon={faListUl} size="lg" />}
				title="Daily Tasks"
			/>
			<Card>
				<Calendar showTasks />
			</Card>
			<CreateTask />
			<Card>
				<ListTasks />
			</Card>
		</>
	);
};

export default TasksPage;
