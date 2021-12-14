import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import Input from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faEdit,
	faTrash,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { deleteWater } from "../../actions/water";

const Water = ({ water, simplified, edit, setEdit }) => {
	const dispatch = useDispatch();
	const [amount, setAmount] = useState(water.amount);
	// const waters = useSelector((state) => state.water);

	return (
		<form className="flex flex-row items-start space-x-4">
			<span
				className={`py-2 pr-4 border-2 border-transparent font-bold 
					`}
			>
				{moment(water.drankAt).format("h:mm a")}
			</span>
			{edit ? (
				<Input
					type="text"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					autoFocus={true}
					errors={water.errors}
					name="amount"
				/>
			) : (
				<span
					className={`py-2 px-4 border-2 border-transparent flex-1 
					`}
				>
					{water.amount} ml
				</span>
			)}

			{edit && (
				<>
					<Button theme="primary" square type="submit">
						<FontAwesomeIcon icon={faCheck} />
					</Button>

					<Button
						theme="danger"
						square
						ghost
						onClick={(e) => {
							dispatch(deleteWater(water._id));
						}}
					>
						<FontAwesomeIcon icon={faTrash} />
					</Button>
				</>
			)}

			{!simplified && (
				<Button
					square
					ghost
					onClick={(e) => {
						setAmount(water.amount);
						//dispatch(clearErrors());
						setEdit(edit ? null : water._id);
					}}
				>
					{edit ? (
						<FontAwesomeIcon icon={faTimes} />
					) : (
						<FontAwesomeIcon icon={faEdit} />
					)}
				</Button>
			)}
		</form>
	);
};

export default Water;
