import { body } from "express-validator";
import validate from "../middleware/validate.js";
import User from "../models/user.js";

export const loginValidator = validate([
	body("email")
		.isEmail()
		.normalizeEmail()
		.withMessage("Invalid email")
		.bail()
		.custom((email) => {
			return User.findOne({ email }).then((user) => {
				if (!user) throw new Error("Email is not in use");
			});
		}),
	body("password", "Password is too short").isLength({ min: 3 }),
]);

export const registerValidator = validate([
	body("fname", "Firstname is too short").notEmpty(),
	body("lname", "Lastname is too short").notEmpty(),
	body("email", "Invalid email")
		.isEmail()
		.normalizeEmail()
		.bail()
		.custom((email) => {
			return User.findOne({ email }).then((user) => {
				if (user) throw new Error("Email is already in use");
			});
		}),
	body("password", "Password is too short").isLength({ min: 3 }),
	body("confirmPassword").custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error("Password does not match");
		}

		return true;
	}),
]);

export const changePasswordValidator = validate([
	body("oldPassword", "Password is too short").isLength({ min: 3 }),
	body("newPassword", "Password is too short").isLength({ min: 3 }),
	body("confirmPassword").custom((value, { req }) => {
		if (value !== req.body.newPassword) {
			throw new Error("Password does not match");
		}

		return true;
	}),
]);

export const changeNameValidator = validate([
	body("fname", "Firstname is too short").notEmpty(),
	body("lname", "Lastname is too short").notEmpty(),
]);
