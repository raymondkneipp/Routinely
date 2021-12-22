import React from "react";
import { Outlet } from "react-router-dom";
import Brand from "./Brand";
import { Button } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const GuestNav = () => {
	return (
		<>
			<nav className="absolute left-0 right-0 top-0">
				<div className="container mx-auto p-5 flex items-center justify-between">
					<Brand />

					<div className="space-x-5">
						<Button
							href="login"
							ghost
							icon={<FontAwesomeIcon icon={faSignInAlt} />}
						>
							Login
						</Button>
						<Button
							href="register"
							theme="primary"
							icon={<FontAwesomeIcon icon={faUserPlus} />}
						>
							Sign Up
						</Button>
					</div>
				</div>
			</nav>

			<Outlet />
		</>
	);
};

export default GuestNav;
