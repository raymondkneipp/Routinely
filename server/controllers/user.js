import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ email });

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!isPasswordCorrect) {
			return res.status(400).json({
				errors: [{ msg: "Password is incorrect", param: "password" }],
			});
		}

		const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const register = async (req, res) => {
	try {
		const { fname, lname, email, password } = req.body;

		const newUser = await User.create({
			fname,
			lname,
			email,
			password,
		});

		const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.userId);

		if (!user) {
			return res.status(404).json({ errors: [{ msg: "No user found" }] });
		}

		res.status(200).json({ fname: user.fname, lname: user.lname });
	} catch (error) {
		res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const changePassword = async (req, res) => {
	try {
		const { oldPassword, newPassword } = req.body;
		const { userId } = req;

		const user = await User.findById(userId);

		const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);

		if (!isPasswordCorrect) {
			return res.status(400).json({
				errors: [{ msg: "Password is incorrect", param: "oldPassword" }],
			});
		}

		user.password = newPassword;

		await user.save();

		return res.status(200).json({ msg: "Password successfully changed" });
	} catch (error) {
		res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const changeName = async (req, res) => {
	try {
		const { fname, lname } = req.body;
		const { userId } = req;

		await User.findByIdAndUpdate(userId, { fname, lname });

		return res.status(200).json({ fname, lname });
	} catch (error) {
		res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};
