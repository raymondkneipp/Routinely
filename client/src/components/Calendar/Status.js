import React from "react";

const Status = ({ title, status = false }) => {
	let color;

	switch (status) {
		case true:
			color = "bg-green-300";
			break;
		case false:
			color = "bg-red-300";
			break;
		default:
			color = "bg-gray-600";
	}

	return (
		<div className="flex items-center space-x-2">
			<div className={`${color} w-4 h-4 rounded-md`}></div>
			<span>{title}</span>
		</div>
	);
};

export default Status;
