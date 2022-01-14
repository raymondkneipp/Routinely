import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBug,
	faCheck,
	faExclamationCircle,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Alert = ({ children, type }) => {
	let icon;
	let color;

	switch (type) {
		case "info":
			icon = faInfoCircle;
			color = "indigo";
			break;
		case "danger":
			icon = faExclamationCircle;
			color = "red";
			break;
		case "warning":
			icon = faExclamationCircle;
			color = "yellow";
			break;
		case "success":
			icon = faCheck;
			color = "green";
			break;
		default:
			icon = faBug;
			color = "red";
	}

	const styles = `bg-${color}-300 text-${color}-900 text-center rounded-lg p-5 flex items-center gap-5`;

	return (
		<div className={styles}>
			<FontAwesomeIcon icon={icon} fixedWidth />
			<span>{children}</span>
		</div>
	);
};

export default Alert;
