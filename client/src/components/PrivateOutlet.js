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
			<div className="flex-1 ml-16">
				<div className="p-2 md:p-5 space-y-5">
					<User />
					<Outlet />
				</div>
			</div>
		</div>
	) : (
		<Navigate to="/login" />
	);
};

export default PrivateOutlet;
