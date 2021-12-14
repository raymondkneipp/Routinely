import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../";

const Brand = () => {
	return (
		<Link
			to="/"
			className="font-bold text-xl text-white flex space-x-5 items-center outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 rounded-md"
		>
			<Logo />
			<h6 className="hidden sm:block">Routinely</h6>
		</Link>
	);
};

export default Brand;
