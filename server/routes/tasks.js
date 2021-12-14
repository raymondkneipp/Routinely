import express from "express";
import {
	getTasks,
	createTask,
	updateTask,
	deleteTask,
	completeTask,
	incompleteTask,
} from "../controllers/tasks.js";
import { authValidator } from "../validators/auth.js";
import {
	createTaskValidator,
	updateTaskValidator,
	completeTaskValidator,
	incompleteTaskValidator,
	deleteTaskValidator,
} from "../validators/task.js";

const router = express.Router();

router.post("/", [authValidator, createTaskValidator], createTask);
router.get("/", authValidator, getTasks);
router.patch("/:id", [authValidator, updateTaskValidator], updateTask);
router.post(
	"/:id/completed",
	[authValidator, completeTaskValidator],
	completeTask
);
router.patch(
	"/:id/completed",
	[authValidator, incompleteTaskValidator],
	incompleteTask
);
router.delete("/:id", [authValidator, deleteTaskValidator], deleteTask);

export default router;
