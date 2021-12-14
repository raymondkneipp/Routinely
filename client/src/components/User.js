import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./";
import { logout, getUser } from "../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCog, faUser } from "@fortawesome/free-solid-svg-icons";

const User = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	if (user.isAuthenticated && user.fname && user.lname) {
		return (
			<div className="py-3 px-3 md:px-5 border-b border-gray-800 fixed top-0 bg-gray-900 left-16 z-50 right-0 flex justify-end">
				<button
					onClick={(e) => setShow((prev) => !prev)}
					className="outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 bg-gray-100 text-gray-900 rounded-full w-10 h-10 flex items-end justify-center overflow-hidden"
				>
					<FontAwesomeIcon icon={faUser} size="2x" />
				</button>
				{show && (
					<div className="absolute bg-gray-900 border-t border-b sm:border border-gray-800 top-full right-0 left-0 sm:right-2 md:right-5 sm:left-auto sm:rounded-b-md p-5 max-w-screen-lg space-y-5">
						<div className="flex items-center space-x-5">
							<div className="bg-gray-100 text-gray-900 rounded-full w-20 h-20 flex items-end justify-center overflow-hidden">
								<FontAwesomeIcon icon={faUser} size="4x" />
							</div>
							<div>
								<h6 className="text-sm text-gray-400">Welcome</h6>
								<h5 className="font-bold text-lg">
									{user.fname} {user.lname}
								</h5>
							</div>
						</div>
						<div className="flex space-y-5 flex-col sm:flex-row sm:space-x-5 sm:space-y-0">
							<Button icon={<FontAwesomeIcon icon={faCog} />} href="/settings">
								Settings
							</Button>
							<Button
								icon={<FontAwesomeIcon icon={faSignOutAlt} />}
								theme="danger"
								onClick={(e) => dispatch(logout())}
							>
								Logout
							</Button>
						</div>
					</div>
				)}
			</div>
		);
	} else {
		return null;
	}
};

export default User;
