import React, { useEffect, useState } from "react";
import moment from "moment";
import { isSameDay } from "../../utils";
import { useSelector } from "react-redux";
import Status from "./Status";

const Day = ({ date, showTasks, showWater }) => {
	const tasks = useSelector((state) => state.tasks);
	const [isTasksCompleted, setIsTasksCompleted] = useState(null);
	const water = useSelector((state) => state.water);
	const [isWaterCompleted, setIsWaterCompleted] = useState(null);

	useEffect(() => {
		if (date.isAfter(new Date())) {
			setIsTasksCompleted(null);
		} else {
			setIsTasksCompleted(
				tasks.tasks.every((task) => {
					return task.completedDates.some((d) => {
						return isSameDay(d, date.toISOString());
					});
				})
			);
		}
	}, [tasks, date]);

	useEffect(() => {
		if (date.isAfter(new Date())) {
			setIsWaterCompleted(null);
		} else {
			setIsWaterCompleted(false);
			// todo finish logic
			// get sum of water for date and see if it is more than goal (2500)

			setIsWaterCompleted(
				water?.water
					.filter((w) => isSameDay(w.drankAt, date.toISOString()))
					.map((item) => item.amount)
					.reduce((prev, current) => prev + current, 0) >= 2500
			);
		}
	}, [water, date]);

	return (
		<div
			className={`${
				moment().isSame(date, "day") ? "bg-gray-700" : "text-gray-400"
			} rounded-md p-2 flex-1`}
		>
			<div className="flex items-center justify-between">
				<h5>{date.format("ddd")}</h5>
				<h6 className="text-sm">{date.format("D")}</h6>
			</div>
			{showTasks && <Status title="Tasks" status={isTasksCompleted} />}
			{showWater && <Status title="Water" status={isWaterCompleted} />}
		</div>
	);
};

export default Day;
