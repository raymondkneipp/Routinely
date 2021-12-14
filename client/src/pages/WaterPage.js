import React, { useEffect, useState } from "react";
import { Calendar, Card, Header } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import ListWater from "../components/Water/ListWater";
import WaterProgress from "../components/Water/WaterProgress";
import { useSelector } from "react-redux";
import { isToday } from "../utils";
import AddWater from "../components/Water/AddWater";

const WaterPage = () => {
	const [todaysIntake, setTodaysIntake] = useState([]);

	const water = useSelector((state) => state.water);

	useEffect(() => {
		setTodaysIntake(water?.water.filter((w) => isToday(w.drankAt)));
	}, [water]);

	return (
		<>
			<Header
				large
				icon={<FontAwesomeIcon icon={faTint} size="lg" />}
				title="Water"
			/>

			<Card>
				<Calendar showWater />
			</Card>

			<WaterProgress todaysIntake={todaysIntake} />

			<AddWater />

			<Card>
				<Header
					icon={<FontAwesomeIcon icon={faCalendarDay} />}
					title="Today's History"
				/>
				<ListWater />
			</Card>
		</>
	);
};

export default WaterPage;
