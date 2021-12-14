import React, { useState } from "react";
import { Input, Card, Header, Button } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addWater } from "../../actions/water";

const AddWater = () => {
	const [amountToAdd, setAmountToAdd] = useState("");
	const dispatch = useDispatch();
	const water = useSelector((state) => state.water);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(addWater(amountToAdd));

		setAmountToAdd("");
	};

	return (
		<Card>
			<Header icon={<FontAwesomeIcon icon={faPlus} />} title="Log Water" />
			<div className="grid sm:grid-cols-3 gap-5">
				<Button
					theme="primary"
					icon={<FontAwesomeIcon icon={faPlus} />}
					ghost
					onClick={(e) => setAmountToAdd(240)}
				>
					240 ml
				</Button>
				<Button
					theme="primary"
					icon={<FontAwesomeIcon icon={faPlus} />}
					ghost
					onClick={(e) => setAmountToAdd(360)}
				>
					360 ml
				</Button>
				<Button
					theme="primary"
					icon={<FontAwesomeIcon icon={faPlus} />}
					ghost
					onClick={(e) => setAmountToAdd(500)}
				>
					500 ml
				</Button>
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-5">
				<Input
					placeholder="Amount"
					name="amount"
					type="number"
					value={amountToAdd}
					onChange={(e) => setAmountToAdd(e.target.value)}
					errors={water.errors}
				/>

				<Button
					theme="primary"
					type="submit"
					icon={<FontAwesomeIcon icon={faPlus} />}
					wide
					loading={water.isLoading}
				>
					Log Water
				</Button>
			</form>
		</Card>
	);
};

export default AddWater;
