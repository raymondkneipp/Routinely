import express from "express";
import {
	addJournal,
	deleteJournal,
	getJournals,
	updateJournal,
} from "../controllers/journal.js";
import { authValidator } from "../validators/auth.js";
import {
	addJournalValidator,
	updateJournalValidator,
	deleteJournalValidator,
} from "../validators/journal.js";

const router = express.Router();

router.post("/", [authValidator, addJournalValidator], addJournal);
router.get("/", authValidator, getJournals);
router.put("/:id", [authValidator, updateJournalValidator], updateJournal);
router.delete("/:id", [authValidator, deleteJournalValidator], deleteJournal);

export default router;
