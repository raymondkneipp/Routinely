import Water from "../models/water.js";

export const getWater = async (req, res) => {
	const { userId } = req;

	try {
		const water = await Water.find({ owner: userId });

		return res.status(200).json(water);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const addWater = async (req, res) => {
	const { amount } = req.body;
	const { userId } = req;
	const drankAt = new Date();

	try {
		const newWater = await Water.create({ amount, drankAt, owner: userId });

		return res.status(201).json(newWater);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};

export const deleteWater = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedWater = await Water.findByIdAndDelete(id);

		return res.status(200).json(deletedWater);
	} catch (error) {
		return res.status(500).json({ errors: [{ msg: "Something went wrong" }] });
	}
};
