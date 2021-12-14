import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

import tasksRoutes from "./routes/tasks.js";
import waterRoutes from "./routes/water.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

// app.use(morgan("tiny"));
morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
	morgan(
		":method :url :status :response-time ms - :res[content-length] :body - :req[content-length]"
	)
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Test route
app.get("/", (req, res) => res.send("Routinely"));

app.use("/tasks", tasksRoutes);
app.use("/water", waterRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(port, () =>
			console.log(`Server running at http://localhost:${port}`)
		);
	})
	.catch((error) => console.log(error));
