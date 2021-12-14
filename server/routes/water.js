import express from "express";
import { getWater, addWater, deleteWater } from "../controllers/water.js";
import { authValidator } from "../validators/auth.js";
import {
	addWaterValidator,
	deleteWaterValidator,
} from "../validators/water.js";

const router = express.Router();

router.get("/", authValidator, getWater);
router.post("/", [authValidator, addWaterValidator], addWater);
router.delete("/:id", [authValidator, deleteWaterValidator], deleteWater);

export default router;
