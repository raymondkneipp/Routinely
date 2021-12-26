import mongoose from "mongoose";

const JournalSchema = mongoose.Schema({
	wroteAt: {
		type: Date,
		default: Date.now,
	},
	mood: {
		type: String,
		enum: ["good", "okay", "bad"],
		required: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		select: false,
	},
	note: {
		type: String,
		required: false,
	},
});

const Journal = mongoose.model("Journal", JournalSchema);

export default Journal;
