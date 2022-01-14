import React from "react";

const Progress = ({ value, max }) => {
	const percent = (100 * value) / max;

	return (
		<div className="relative bg-gray-700 w-full h-4 rounded-lg overflow-hidden z-10">
			<div
				className="absolute bg-indigo-300 h-full rounded-lg shadow-md transition-all z-20"
				style={{ width: `${percent}%` }}
			></div>
		</div>
	);
};

export default Progress;
