import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./";
import { logout, getUser } from "../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCog } from "@fortawesome/free-solid-svg-icons";

const User = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	if (user.isAuthenticated && user.fname && user.lname) {
		return (
			<div className="py-3 px-3 md:px-5 border-b border-gray-800 fixed top-0 bg-gray-900 left-16 z-50 right-0 flex justify-end space-x-5">
				<div className="flex items-center">
					<h6 className="text-sm font-bold text-white">
						{user.fname} {user.lname}
					</h6>
				</div>
				<Button square href="/settings">
					<FontAwesomeIcon icon={faCog} />
				</Button>
				<Button theme="danger" onClick={(e) => dispatch(logout())} square>
					<FontAwesomeIcon icon={faSignOutAlt} />
				</Button>
			</div>
		);
	} else {
		return null;
	}
};

export default User;
