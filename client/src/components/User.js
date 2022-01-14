import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./";
import { logout, getUser } from "../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const User = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	if (user.isAuthenticated && user.fname && user.lname) {
		return (
			<Card>
				<div className="flex flex-wrap justify-between sm:items-center gap-5">
					<div className="flex items-center gap-5">
						<div className="flex bg-gray-300 text-black rounded-lg overflow-hidden items-end justify-center w-10 h-10">
							<FontAwesomeIcon icon={faUser} size="2x" />
						</div>
						<h3 className="text-lg font-bold text-white">
							{user.fname} {user.lname}
						</h3>
					</div>
					<div className="flex flex-wrap gap-2 items-start">
						<Button
							ghost
							icon={<FontAwesomeIcon icon={faCog} />}
							href="/settings"
						>
							Settings
						</Button>
						<Button
							ghost
							icon={<FontAwesomeIcon icon={faSignOutAlt} />}
							theme="danger"
							onClick={(e) => dispatch(logout())}
						>
							Logout
						</Button>
					</div>
				</div>
			</Card>
		);
	} else {
		return null;
	}
};

export default User;
