import { body, param } from "express-validator";
import validate from "../middleware/validate.js";
import Task from "../models/task.js";

export const createTaskValidator = validate([
	body("name", "Task is too short").isLength({ min: 3 }),
]);

export const updateTaskValidator = validate([
	body("name", "Task is too short").isLength({ min: 3 }),
	param("id")
		.isMongoId()
		.withMessage("Invalid task id")
		.bail()
		.custom((id, { req }) => {
			return Task.findOne({ _id: id, owner: req.userId }).then((task) => {
				if (!task) throw new Error("Task was not found");
			});
		}),
]);

export const completeTaskValidator = validate([
	param("id")
		.isMongoId()
		.withMessage("Invalid task id")
		.bail()
		.custom((id, { req }) => {
			return Task.findOne({ _id: id, owner: req.userId }).then((task) => {
				if (!task) throw new Error("Task was not found");
			});
		}),
]);

export const incompleteTaskValidator = validate([
	body("date", "Invalid date").isISO8601().toDate(),
	param("id")
		.isMongoId()
		.withMessage("Invalid task id")
		.bail()
		.custom((id, { req }) => {
			return Task.findOne({ _id: id, owner: req.userId }).then((task) => {
				if (!task) throw new Error("Task was not found");
			});
		}),
]);

export const deleteTaskValidator = validate([
	param("id")
		.isMongoId()
		.withMessage("Invalid task id")
		.bail()
		.custom((id, { req }) => {
			return Task.findOne({ _id: id, owner: req.userId }).then((task) => {
				if (!task) throw new Error("Task was not found");
			});
		}),
]);
