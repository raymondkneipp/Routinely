import React from "react";

const Card = ({ children }) => {
	return (
		<div className="space-y-5 p-3 md:p-5 bg-gray-800 rounded-lg">
			{children}
		</div>
	);
};

export default Card;
