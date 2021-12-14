import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Placeholder } from "..";
import { getTasks } from "../../actions/tasks";
import Task from "./Task";

const ListTasks = ({ simplified = false }) => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks);
	const [edit, setEdit] = useState(null);

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

	return (
		<>
			{tasks.tasks.length ? (
				<>
					{tasks.tasks.map((task) => (
						<Task
							task={task}
							key={task._id}
							simplified={simplified}
							edit={task._id === edit}
							setEdit={(id) => setEdit(id)}
						/>
					))}
				</>
			) : (
				<Placeholder loading={tasks.isLoading}>No Tasks Found</Placeholder>
			)}
		</>
	);
};

export default ListTasks;
