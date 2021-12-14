import React from "react";
import { Header } from "./";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCloud } from "@fortawesome/free-solid-svg-icons";

const Greeting = () => {
	const hour = parseInt(moment().format("H"));
	let greeting, icon;

	switch (true) {
		case hour < 12:
			greeting = "Good Morning";
			icon = <FontAwesomeIcon icon={faSun} size="lg" />;
			break;
		case hour >= 12 && hour < 18:
			greeting = "Good Afternoon";
			icon = <FontAwesomeIcon icon={faCloud} size="lg" />;
			break;
		default:
			greeting = "Good Evening";
			icon = <FontAwesomeIcon icon={faMoon} size="lg" />;
	}

	return <Header icon={icon} title={greeting} />;
};

export default Greeting;
