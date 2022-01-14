import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFrown,
	faMeh,
	faPlus,
	faSmile,
} from "@fortawesome/free-solid-svg-icons";
import Textarea from "../Textarea";
import { createJournal } from "../../actions/journals";

const CreateJournal = () => {
	const [mood, setMood] = useState("good");
	const [note, setNote] = useState("");
	const dispatch = useDispatch();
	const journals = useSelector((state) => state.journals);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createJournal(mood, note));

		setMood("good");
		setNote("");
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="flex flex-col space-y-5">
			<div className="grid gap-5 sm:grid-cols-3">
				<Button
					icon={<FontAwesomeIcon icon={faSmile} fixedWidth size="2x" />}
					theme="success"
					ghost={mood !== "good"}
					onClick={(e) => setMood("good")}
					lg
				>
					Good
				</Button>
				<Button
					icon={<FontAwesomeIcon icon={faMeh} fixedWidth size="2x" />}
					theme="warning"
					ghost={mood !== "okay"}
					onClick={(e) => setMood("okay")}
					lg
				>
					Okay
				</Button>
				<Button
					icon={<FontAwesomeIcon icon={faFrown} fixedWidth size="2x" />}
					theme="danger"
					ghost={mood !== "bad"}
					onClick={(e) => setMood("bad")}
					lg
				>
					Bad
				</Button>
			</div>
			<Textarea
				placeholder="Describe your day (optional)"
				value={note}
				onChange={(e) => setNote(e.target.value)}
			/>
			<Button
				type="submit"
				theme="primary"
				wide
				icon={<FontAwesomeIcon icon={faPlus} />}
				loading={journals.isLoading}
			>
				Add Journal
			</Button>
		</form>
	);
};

export default CreateJournal;
