import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFrown,
	faMeh,
	faSmile,
	faCheck,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Textarea from "../Textarea";
import { deleteJournal, updateJournal } from "../../actions/journals";

const EditJournal = ({ journal, setEdit }) => {
	const [mood, setMood] = useState(journal.mood);
	const [note, setNote] = useState(journal.note);
	const journals = useSelector((state) => state.journals);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateJournal(mood, note, journal._id));
		setEdit(false);
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
			<div className="flex items-center flex-col sm:flex-row gap-5">
				<Button
					type="button"
					theme="danger"
					onClick={(e) => dispatch(deleteJournal(journal._id))}
					wide
					icon={<FontAwesomeIcon icon={faTrash} />}
					loading={journals.isLoading}
				>
					Delete
				</Button>
				<Button
					type="submit"
					theme="success"
					wide
					icon={<FontAwesomeIcon icon={faCheck} />}
					loading={journals.isLoading}
				>
					Update
				</Button>
			</div>
		</form>
	);
};

export default EditJournal;
