import mongoose from "mongoose";

const WaterSchema = mongoose.Schema({
	amount: {
		type: Number,
		required: true,
	},
	drankAt: {
		type: Date,
		required: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		select: false,
	},
});

const Water = mongoose.model("Water", WaterSchema);

export default Water;
