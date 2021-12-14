import Task from "../models/task.js";

export const createTask = async (req, res) => {
	const { name } = req.body;
	const { userId } = req;

	try {
		const newTask = await Task.create({ name, owner: userId });

		return res.status(201).json(newTask);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const getTasks = async (req, res) => {
	const { userId } = req;

	try {
		const tasks = await Task.find({ owner: userId });

		return res.status(200).json(tasks);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const updateTask = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	try {
		const updatedTask = await Task.findByIdAndUpdate(
			id,
			{ name },
			{ new: true }
		);

		return res.status(200).json(updatedTask);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const completeTask = async (req, res) => {
	const { id } = req.params;
	const date = new Date();

	try {
		const completedTask = await Task.findByIdAndUpdate(
			id,
			{
				$push: { completedDates: date },
			},
			{ new: true }
		);

		res.status(200).json(completedTask);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const incompleteTask = async (req, res) => {
	const { id } = req.params;
	const { date } = req.body;

	try {
		const incompletedTask = await Task.findByIdAndUpdate(
			id,
			{
				$pull: { completedDates: date },
			},
			{ new: true }
		);
		res.status(200).json(incompletedTask);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const deleteTask = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedTask = await Task.findByIdAndDelete(id);

		res.status(200).json(deletedTask);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};
