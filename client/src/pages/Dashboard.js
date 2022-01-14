import React, { useEffect } from "react";
import {
	Water,
	Header,
	Calendar,
	Card,
	ListTasks,
	Greeting,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faListUl,
	faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import CreateJournal from "../components/Journals/CreateJournal";
import { getJournals } from "../actions/journals";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { isToday } from "../utils";
import DisplayJournal from "../components/Journals/DisplayJournal";

const Dashboard = () => {
	const dispatch = useDispatch();
	const journals = useSelector((state) => state.journals);
	const [todaysJournal, setTodaysJournal] = useState(undefined);

	useEffect(() => {
		dispatch(getJournals());
	}, [dispatch]);

	useEffect(() => {
		setTodaysJournal(journals.journals.find((j) => isToday(j.wroteAt)));
	}, [journals]);

	return (
		<>
			<Header
				large
				icon={<FontAwesomeIcon icon={faHome} size="lg" />}
				title="Overview"
			/>

			<Card>
				<Greeting />
				<Calendar showTasks showWater showJournals />
			</Card>

			<Card>
				<Header
					icon={<FontAwesomeIcon icon={faListUl} />}
					title="Daily Tasks"
				/>
				<ListTasks simplified />
			</Card>

			<Water />

			<Card>
				<Header
					icon={<FontAwesomeIcon icon={faPencilAlt} />}
					title="Journals"
				/>
				{todaysJournal ? (
					<DisplayJournal journal={todaysJournal} />
				) : (
					<CreateJournal />
				)}
			</Card>
		</>
	);
};

export default Dashboard;
