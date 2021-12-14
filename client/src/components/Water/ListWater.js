import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Placeholder } from "..";
import { getWater } from "../../actions/water";
import { isToday } from "../../utils";
import Water from "./Water";

const ListWater = ({ simplified = false }) => {
	const dispatch = useDispatch();
	const water = useSelector((state) => state.water);
	const [edit, setEdit] = useState(null);
	const [todaysIntake, setTodaysIntake] = useState([]);

	useEffect(() => {
		dispatch(getWater());
	}, [dispatch]);

	useEffect(() => {
		setTodaysIntake(water.water.filter((water) => isToday(water.drankAt)));
	}, [water]);

	return (
		<>
			{todaysIntake.length ? (
				<>
					{todaysIntake.map((water) => (
						<Water
							water={water}
							key={water._id}
							simplified={simplified}
							edit={water._id === edit}
							setEdit={(id) => setEdit(id)}
						/>
					))}
				</>
			) : (
				<Placeholder loading={water.isLoading}>No Water Logged</Placeholder>
			)}
		</>
	);
};

export default ListWater;
