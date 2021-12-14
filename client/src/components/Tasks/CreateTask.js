import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../actions/tasks";
import { Input, Button, Card } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateTask = () => {
	const [newTask, setNewTask] = useState("");
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createTask(newTask));

		setNewTask("");
	};

	return (
		<Card>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="flex flex-col space-y-5"
			>
				<Input
					type="text"
					value={newTask}
					placeholder="Create Task"
					onChange={(e) => setNewTask(e.target.value)}
					errors={tasks.errors}
					name="name"
				/>
				<Button
					type="submit"
					theme="primary"
					wide
					icon={<FontAwesomeIcon icon={faPlus} />}
					loading={tasks.isLoading}
				>
					Add Task
				</Button>
			</form>
		</Card>
	);
};

export default CreateTask;
