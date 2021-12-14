import React from "react";

const Header = ({ title, icon, large, children }) => {
	if (large) {
		return (
			<div className="flex items-center space-x-5">
				<div className="bg-green-300 rounded-md h-14 w-14 flex items-center justify-center text-gray-900">
					{icon}
				</div>
				<div className="flex space-y-1 flex-col">
					<h2 className="font-bold text-2xl">{title}</h2>
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex items-center space-x-5">
				<div
					className={`bg-green-300 rounded-md h-10 w-10 flex items-center justify-center text-gray-900 transition-colors capitalize font-bold`}
				>
					{icon}
				</div>
				<h2 className="font-bold capitalize">{title}</h2>
				<div className="flex-1 flex items-center flex-row justify-end space-x-5">
					{children}
				</div>
			</div>
		);
	}
};

export default Header;
