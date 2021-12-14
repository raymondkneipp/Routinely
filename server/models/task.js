import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		select: false,
	},
	completedDates: {
		type: [Date],
	},
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
