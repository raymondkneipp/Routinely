import React from "react";

const Status = ({ title, status }) => {
	let color;

	switch (status) {
		case "success":
			color = "bg-green-300";
			break;
		case "danger":
			color = "bg-red-300";
			break;
		case "off":
			color = "bg-gray-600";
			break;
		case "warning":
			color = "bg-yellow-300";
			break;
		default:
			color = "bg-indigo-300";
	}

	return (
		<div className="flex items-center space-x-2">
			<div className={`${color} w-4 h-4 rounded-lg`}></div>
			<span>{title}</span>
		</div>
	);
};

export default Status;
