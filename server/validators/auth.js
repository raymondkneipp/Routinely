import { header } from "express-validator";
import validate from "../middleware/validate.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authValidator = validate([
	header("authorization")
		.exists()
		.withMessage("No authorization token provided")
		.bail()
		.custom((token, { req }) => {
			const decodedToken = jwt.verify(
				token.split(" ")[1],
				process.env.JWT_SECRET
			);

			if (decodedToken) req.userId = decodedToken.id;

			return true;
		}),
]);
