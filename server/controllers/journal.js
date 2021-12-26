import Journal from "../models/journal.js";
import moment from "moment";

export const addJournal = async (req, res) => {
	const { mood, note } = req.body;
	const { userId } = req;
	const today = moment().startOf("day");

	try {
		// Check if journal exists for the day
		const existingJournal = await Journal.findOne({
			owner: userId,
			wroteAt: {
				$gte: today.toDate(),
				$lte: moment(today).endOf("day").toDate(),
			},
		});

		if (existingJournal) {
			return res.status(400).json({
				errors: [
					{ msg: "A journal was already created for the day", param: "date" },
				],
			});
		}

		const newJournal = await Journal.create({
			mood,
			note,
			owner: userId,
		});

		return res.status(201).json(newJournal);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const getJournals = async (req, res) => {
	const { userId } = req;

	try {
		const journals = await Journal.find({ owner: userId });

		return res.status(200).json(journals);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const updateJournal = async (req, res) => {
	const { id } = req.params;
	const { mood, note } = req.body;

	try {
		const updatedJournal = await Journal.findByIdAndUpdate(
			id,
			{ mood, note },
			{ new: true }
		);

		return res.status(200).json(updatedJournal);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const deleteJournal = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedJournal = await Journal.findByIdAndDelete(id);

		return res.status(200).json(deletedJournal);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};
