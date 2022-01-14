import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import Input from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faTimes,
	faEdit,
	faTrash,
	faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
	completeTask,
	deleteTask,
	incompleteTask,
	updateTask,
	clearErrors,
} from "../../actions/tasks";
import { isToday } from "../../utils";

const Task = ({ task, simplified, edit, setEdit }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState(task.name);
	const [completed, setCompleted] = useState(false);
	const tasks = useSelector((state) => state.tasks);

	useEffect(() => {
		const lastDate = task.completedDates[task.completedDates.length - 1];
		setCompleted(isToday(lastDate));
	}, [task]);

	return (
		<form
			className="flex flex-row items-start space-x-4"
			onSubmit={(e) => {
				e.preventDefault();
				dispatch(updateTask(name, task._id));
			}}
		>
			<Button
				square
				theme={completed ? "success" : "danger"}
				loading={tasks.isLoading}
				onClick={() => {
					if (completed) {
						dispatch(incompleteTask(task._id, completed)); // I believe this is the problem
					} else {
						dispatch(completeTask(task._id));
					}
				}}
			>
				{completed ? (
					<FontAwesomeIcon icon={faCheck} />
				) : (
					<FontAwesomeIcon icon={faExclamation} />
				)}
			</Button>

			{edit ? (
				<Input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					autoFocus={true}
					errors={tasks.errors}
					name="name"
				/>
			) : (
				<span
					className={`py-2 px-4 border border-transparent flex-1 ${
						completed ? "text-gray-400" : ""
					}`}
				>
					{task.name}
				</span>
			)}

			{edit && (
				<>
					<Button theme="primary" square type="submit">
						<FontAwesomeIcon icon={faCheck} />
					</Button>

					<Button
						theme="danger"
						square
						ghost
						onClick={(e) => {
							dispatch(deleteTask(task._id));
						}}
					>
						<FontAwesomeIcon icon={faTrash} />
					</Button>
				</>
			)}

			{!simplified && (
				<Button
					square
					ghost
					onClick={(e) => {
						setName(task.name);
						dispatch(clearErrors());
						setEdit(edit ? null : task._id);
					}}
				>
					{edit ? (
						<FontAwesomeIcon icon={faTimes} />
					) : (
						<FontAwesomeIcon icon={faEdit} />
					)}
				</Button>
			)}
		</form>
	);
};

export default Task;
