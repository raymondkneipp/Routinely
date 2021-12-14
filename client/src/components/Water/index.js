import React, { useEffect, useState } from "react";
import { Card, Progress, Button, Header, Placeholder } from "..";
import { useSelector, useDispatch } from "react-redux";
import { addWater, getWater } from "../../actions/water";
import Chart from "./Chart";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTint } from "@fortawesome/free-solid-svg-icons";
import { isToday } from "../../utils";

const Water = () => {
	const isTimeSameOrBetween = (time, start, end) => {
		if (time.isBetween(start, end) || time.isSame(start)) {
			return true;
		}
		return false;
	};

	const dispatch = useDispatch();
	const water = useSelector((state) => state.water);
	const [todaysIntake, setTodaysIntake] = useState([]);
	const [total, setTotal] = useState(0);
	const [max] = useState(2500);
	const [chartData, setChartData] = useState([
		{
			time: "8am",
			amount: 0,
		},
		{
			time: "10am",
			amount: 0,
		},
		{
			time: "12pm",
			amount: 0,
		},
		{
			time: "2pm",
			amount: 0,
		},
		{
			time: "4pm",
			amount: 0,
		},
		{
			time: "6pm",
			amount: 0,
		},
		{
			time: "8pm",
			amount: 0,
		},
		{
			time: "10pm",
			amount: 0,
		},
	]);

	useEffect(() => {
		dispatch(getWater());
	}, [dispatch]);

	useEffect(() => {
		setTodaysIntake(water.water.filter((water) => isToday(water.drankAt)));
	}, [water]);

	useEffect(() => {
		if (todaysIntake.length) {
			const sum = todaysIntake.reduce((a, b) => {
				return a + b.amount;
			}, 0);
			setTotal(sum);
		}

		let format = "HH:mm:ss";

		const timeslots = [
			moment("08:00:00", format),
			moment("10:00:00", format),
			moment("12:00:00", format),
			moment("14:00:00", format),
			moment("16:00:00", format),
			moment("18:00:00", format),
			moment("20:00:00", format),
			moment("22:00:00", format),
			moment("23:00:00", format),
		];

		const green = "#34D399";
		const red = "#F77171";

		const reset = chartData;
		reset.forEach((slot) => (slot.amount = 0));
		setChartData(reset);

		todaysIntake.forEach((w) => {
			const waterTime = moment(w.drankAt);
			const oldChartData = chartData;

			for (let i = 0; i <= timeslots.length - 2; i++) {
				if (isTimeSameOrBetween(waterTime, timeslots[i], timeslots[i + 1])) {
					oldChartData[i] = {
						...oldChartData[i],
						amount: oldChartData[i].amount + w.amount,
					};

					setChartData(oldChartData);
				}
			}
		});

		chartData.forEach((slot) => {
			if (slot.amount > 500) {
				slot.color = red;
			} else if (slot.amount < 100) {
				slot.color = red;
			} else {
				slot.color = green;
			}
		});
	}, [todaysIntake, chartData]);

	return (
		<Card>
			<Header
				title="Water"
				icon={<FontAwesomeIcon icon={faTint} size="lg" />}
			/>

			{water.isLoading ? (
				<Placeholder loading={water.isLoading}></Placeholder>
			) : (
				<Chart chartData={chartData} />
			)}

			<Progress value={total} max={max} />

			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				<Button
					onClick={(e) => {
						dispatch(addWater(240));
					}}
					icon={<FontAwesomeIcon icon={faPlus} />}
					theme="primary"
					ghost
				>
					240 ml
				</Button>

				<Button
					onClick={(e) => {
						dispatch(addWater(360));
					}}
					icon={<FontAwesomeIcon icon={faPlus} />}
					theme="primary"
					ghost
				>
					360ml
				</Button>

				<Button
					onClick={(e) => {
						dispatch(addWater(500));
					}}
					icon={<FontAwesomeIcon icon={faPlus} />}
					theme="primary"
					ghost
				>
					500 ml
				</Button>
			</div>
		</Card>
	);
};

export default Water;
