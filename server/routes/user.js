import express from "express";
import {
	login,
	register,
	getUser,
	changePassword,
	changeName,
} from "../controllers/user.js";
import {
	changeNameValidator,
	changePasswordValidator,
	loginValidator,
	registerValidator,
} from "../validators/user.js";
import { authValidator } from "../validators/auth.js";

const router = express.Router();

router.post("/login", loginValidator, login);
router.post("/register", registerValidator, register);
router.get("/", authValidator, getUser);
router.patch(
	"/password",
	[authValidator, changePasswordValidator],
	changePassword
);
router.patch("/name", [authValidator, changeNameValidator], changeName);

export default router;
