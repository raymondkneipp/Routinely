import React from "react";

const Progress = ({ value, max }) => {
	const percent = (100 * value) / max;

	return (
		<div className="relative bg-gray-700 w-full h-4 rounded-md overflow-hidden">
			<div
				className="absolute bg-green-300 h-full rounded-md shadow-md transition-all"
				style={{ width: `${percent}%` }}
			></div>
		</div>
	);
};

export default Progress;
