import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User } from "./";
import { AuthNav } from "./Navbar";

const PrivateOutlet = () => {
	const user = useSelector((state) => state.auth);
	return user.isAuthenticated ? (
		<div className="flex">
			<AuthNav />
			<div className="mt-16 flex-1 ml-16">
				<User />
				<div className="p-2 md:p-5 space-y-5">
					<Outlet />
				</div>
			</div>
		</div>
	) : (
		<Navigate to="/login" />
	);
};

export default PrivateOutlet;
