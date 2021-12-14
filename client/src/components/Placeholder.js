import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Placeholder = ({ children, loading }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center py-20 space-y-2">
				{loading ? (
					<div className="flex items-center space-x-2">
						<FontAwesomeIcon icon={faCircleNotch} spin />
						<h6 className="font-bold text-gray-400 text-xl">Loading</h6>
					</div>
				) : (
					<h6 className="font-bold text-gray-400 text-xl">{children}</h6>
				)}
			</div>
		</>
	);
};

export default Placeholder;
