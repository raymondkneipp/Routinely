import { body, param } from "express-validator";
import validate from "../middleware/validate.js";
import Water from "../models/water.js";

export const addWaterValidator = validate([
	body("amount", "Invalid amount").isInt(),
]);

export const deleteWaterValidator = validate([
	param("id")
		.isMongoId()
		.withMessage("Invalid task id")
		.bail()
		.custom((id, { req }) => {
			return Water.findOne({ _id: id, owner: req.userId }).then((task) => {
				if (!task) throw new Error("Water log was not found");
			});
		}),
]);
