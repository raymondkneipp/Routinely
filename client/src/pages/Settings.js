import React from "react";
import { Header, ChangePassword, ChangeName } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
	return (
		<>
			<Header
				large
				icon={<FontAwesomeIcon icon={faCog} size="lg" />}
				title="Settings"
			/>

			<ChangeName />

			<ChangePassword />
		</>
	);
};

export default Settings;
