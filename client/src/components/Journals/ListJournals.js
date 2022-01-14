import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "..";
import { getJournals } from "../../actions/journals";
import moment from "moment";
import { isSameDay } from "../../utils";

const Indicator = ({ journal, date, handleClick, selected }) => {
	let theme;

	switch (journal?.mood) {
		case "good":
			theme = "success";
			break;
		case "okay":
			theme = "warning";
			break;
		case "bad":
			theme = "danger";
			break;
		default:
			theme = "";
			break;
	}

	return (
		<Button
			theme={theme}
			onClick={(e) =>
				handleClick(journal?.wroteAt || moment(date).toISOString())
			}
			ghost={!isSameDay(date, selected)}
		>
			{date.format("D")}
		</Button>
	);
};

const ListJournals = ({ handleClick, selected }) => {
	const dispatch = useDispatch();
	const journals = useSelector((state) => state.journals);

	useEffect(() => {
		dispatch(getJournals());
	}, [dispatch]);

	const numOfDays = 21;
	let today = moment();
	let days = [];

	for (let i = 0; i < numOfDays; i++) {
		let newDate = today.clone().subtract(i, "days");
		let journal = journals.journals.find((journal) =>
			moment(journal.wroteAt).isSame(newDate, "day")
		);
		days.unshift({
			date: newDate,
			journal,
		});
	}

	return (
		<div className="grid grid-cols-7 gap-2">
			{days.map((d) => (
				<Indicator
					journal={d.journal}
					date={d.date}
					key={d.date}
					handleClick={handleClick}
					selected={selected}
				/>
			))}
		</div>
	);
};

export default ListJournals;
