import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Card, Calendar, Button, Placeholder } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencilAlt,
	faEdit,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ListJournals from "../components/Journals/ListJournals";
import EditJournal from "../components/Journals/EditJournal";
import CreateJournal from "../components/Journals/CreateJournal";
import moment from "moment";
import { isSameDay, isToday } from "../utils";
import DisplayJournal from "../components/Journals/DisplayJournal";

const JournalsPage = () => {
	const journals = useSelector((state) => state.journals);
	const [selected, setSelected] = useState(moment().toISOString());
	const [selectedJournal, setSelectedJournal] = useState(undefined);
	const [edit, setEdit] = useState(false);

	useEffect(() => {
		setSelectedJournal(
			journals.journals.find((j) => isSameDay(j.wroteAt, selected))
		);

		setEdit(false);
	}, [selected, journals]);

	const handleClick = (date) => {
		setEdit(false);
		setSelected(date);
	};

	return (
		<>
			<Header
				large
				icon={<FontAwesomeIcon icon={faPencilAlt} size="lg" />}
				title="Journals"
			/>
			<Card>
				<Calendar showJournals />
			</Card>

			<Card>
				<ListJournals handleClick={handleClick} selected={selected} />
			</Card>

			<Card>
				<div className="flex items-center justify-between h-10">
					<h6 className="text-base font-bold text-white">
						{isToday(selected)
							? "Today"
							: moment(selected).format("MMMM Do YYYY")}
					</h6>

					{selectedJournal && (
						<>
							{edit ? (
								<Button
									type="button"
									square
									ghost
									onClick={(e) => setEdit(false)}
								>
									<FontAwesomeIcon icon={faTimes} />
								</Button>
							) : (
								<Button
									type="button"
									square
									ghost
									onClick={(e) => setEdit(true)}
								>
									<FontAwesomeIcon icon={faEdit} />
								</Button>
							)}
						</>
					)}
				</div>

				{selectedJournal ? (
					<>
						{edit ? (
							<EditJournal journal={selectedJournal} setEdit={setEdit} />
						) : (
							<DisplayJournal journal={selectedJournal} />
						)}
					</>
				) : (
					<>
						{isToday(selected) ? (
							<CreateJournal />
						) : (
							<Placeholder>No Journal</Placeholder>
						)}
					</>
				)}
			</Card>
		</>
	);
};

export default JournalsPage;
