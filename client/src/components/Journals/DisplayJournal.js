import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFrown,
	faMeh,
	faSmile,
	faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Textarea from "../Textarea";

const DisplayJournal = ({ journal }) => {
	let bg;
	let icon;

	switch (journal?.mood) {
		case "good":
			bg = "green-300";
			icon = faSmile;
			break;
		case "okay":
			bg = "yellow-300";
			icon = faMeh;
			break;
		case "bad":
			bg = "red-300";
			icon = faFrown;
			break;
		default:
			bg = "gray-600";
			icon = faQuestion;
			break;
	}

	return (
		<div className="space-y-5">
			<div
				className={`px-8 py-4 rounded-lg bg-${bg} text-gray-900 flex items-center justify-center space-x-2 text-center font-bold capitalize`}
			>
				<FontAwesomeIcon icon={icon} size="2x" fixedWidth={true} />
				<span>{journal.mood}</span>
			</div>
			<Textarea
				value={journal.note || "no notes"}
				readOnly={true}
				disabled={true}
			/>
		</div>
	);
};

export default DisplayJournal;
