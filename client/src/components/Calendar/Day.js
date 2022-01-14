import React, { useEffect, useState } from "react";
import moment from "moment";
import { isSameDay } from "../../utils";
import { useSelector } from "react-redux";
import Status from "./Status";

const Day = ({ date, showTasks, showWater, showJournals }) => {
	const tasks = useSelector((state) => state.tasks);
	const [isTasksCompleted, setIsTasksCompleted] = useState("off");
	const water = useSelector((state) => state.water);
	const [isWaterCompleted, setIsWaterCompleted] = useState("off");
	const journals = useSelector((state) => state.journals);
	const [journalStatus, setJournalStatus] = useState("off");

	useEffect(() => {
		if (date.isAfter(new Date())) {
			setIsTasksCompleted("off");
		} else {
			if (
				tasks.tasks.every((task) => {
					return task.completedDates.some((d) => {
						return isSameDay(d, date.toISOString());
					});
				})
			) {
				setIsTasksCompleted("success");
			} else {
				setIsTasksCompleted("danger");
			}
		}
	}, [tasks, date]);

	useEffect(() => {
		if (date.isAfter(new Date())) {
			setIsWaterCompleted("off");
		} else {
			if (
				water?.water
					.filter((w) => isSameDay(w.drankAt, date.toISOString()))
					.map((item) => item.amount)
					.reduce((prev, current) => prev + current, 0) >= 2500
			) {
				setIsWaterCompleted("success");
			} else {
				setIsWaterCompleted("danger");
			}
		}
	}, [water, date]);

	useEffect(() => {
		setJournalStatus("warning");
		if (date.isAfter(new Date())) {
			setJournalStatus("off");
		} else {
			const mood = journals?.journals.filter((j) =>
				isSameDay(j.wroteAt, date.toISOString())
			)[0]?.mood;

			switch (mood) {
				case "good":
					setJournalStatus("success");
					break;
				case "okay":
					setJournalStatus("warning");
					break;
				case "bad":
					setJournalStatus("danger");
					break;
				default:
					setJournalStatus("off");
			}
		}
	}, [journals, date]);

	return (
		<div
			className={`${
				moment().isSame(date, "day") ? "bg-gray-700" : "text-gray-400"
			} rounded-lg p-2 flex-1`}
		>
			<div className="flex items-center justify-between">
				<h5>{date.format("ddd")}</h5>
				<h6 className="text-sm">{date.format("D")}</h6>
			</div>
			{showTasks && <Status title="Tasks" status={isTasksCompleted} />}
			{showWater && <Status title="Water" status={isWaterCompleted} />}
			{showJournals && <Status title="Mood" status={journalStatus} />}
		</div>
	);
};

export default Day;
