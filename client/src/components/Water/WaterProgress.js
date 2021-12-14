import moment from "moment";
import React, { useState, useEffect } from "react";
import { Card, Progress } from "../";

const WaterProgress = ({ todaysIntake }) => {
	const [drank, setDrank] = useState(0);
	const [remaining, setRemaining] = useState(2500);
	const [goal] = useState(2500);
	const [percent, setPercent] = useState(0);
	const [sinceLastDrink, setSinceLastDrink] = useState(0);

	useEffect(() => {
		setDrank(
			todaysIntake
				.map((item) => item.amount)
				.reduce((prev, current) => prev + current, 0)
		);
	}, [todaysIntake]);

	useEffect(() => {
		setRemaining(goal - drank);
		setPercent((drank * 100) / goal);
	}, [drank, goal]);

	useEffect(() => {
		setSinceLastDrink(
			moment().diff(
				moment.max(todaysIntake.map((item) => moment(item.drankAt))),
				"minutes"
			)
		);
	}, [todaysIntake]);

	return (
		<>
			<Card>
				<Progress value={drank} max={goal} />
				<div className="flex items-center justify-center sm:flex-row flex-col">
					<div>
						<h2 className="font-bold text-3xl text-center sm:text-left">
							{drank}
						</h2>
						<h6 className="text-gray-400 text-center sm:text-left">ml drank</h6>
					</div>
					<p className="text-center font-bold text-gray-400 flex-1">+</p>

					<div>
						<h2 className="font-bold text-3xl text-center">{remaining}</h2>
						<h6 className="text-gray-400 text-center">ml remaining</h6>
					</div>
					<p className="text-center font-bold text-gray-400 flex-1">=</p>
					<div>
						<h2 className="font-bold text-3xl text-center sm:text-right">
							{goal}
						</h2>
						<h6 className="text-gray-400 text-center sm:text-right">goal</h6>
					</div>
				</div>
			</Card>
			<Card>
				<div className="flex items-center justify-between">
					<div>
						<h2 className="font-bold text-3xl">{percent}%</h2>
						<h6 className="text-gray-400">progress</h6>
					</div>

					<div>
						<h2 className="font-bold text-3xl text-right">
							{sinceLastDrink} min
						</h2>
						<h6 className="text-gray-400 text-right">since last drink</h6>
					</div>
				</div>
			</Card>
		</>
	);
};

export default WaterProgress;
