import { body, param } from "express-validator";
import validate from "../middleware/validate.js";
import Journal from "../models/journal.js";

export const addJournalValidator = validate([
	body("mood", "Invalid mood").isIn(["good", "okay", "bad"]),
	body("note", "Invalid note").optional().isString(),
]);

export const updateJournalValidator = validate([
	body("mood", "Invalid mood").isIn(["good", "okay", "bad"]),
	body("note", "Invalid note").optional().isString(),
	param("id")
		.isMongoId()
		.withMessage("Invalid journal id")
		.bail()
		.custom((id, { req }) => {
			return Journal.findOne({ _id: id, owner: req.userId }).then((journal) => {
				if (!journal) throw new Error("Journal was not found");
			});
		}),
]);

export const deleteJournalValidator = validate([
	param("id")
		.isMongoId()
		.withMessage("Invalid journal id")
		.bail()
		.custom((id, { req }) => {
			return Journal.findOne({ _id: id, owner: req.userId }).then((journal) => {
				if (!journal) throw new Error("Journal was not found");
			});
		}),
]);
