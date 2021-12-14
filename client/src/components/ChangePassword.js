import React, { useState } from "react";
import { Header, Card, Input, Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../actions/auth";

const initialFormData = {
	oldPassword: "",
	newPassword: "",
	confirmPassword: "",
};

const ChangePassword = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);
	const [formData, setFormData] = useState(initialFormData);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { oldPassword, newPassword, confirmPassword } = formData;

		dispatch(changePassword(oldPassword, newPassword, confirmPassword));

		setFormData(initialFormData);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<Card>
			<Header icon={<FontAwesomeIcon icon={faKey} />} title="Change Password" />
			<form onSubmit={handleSubmit} className="space-y-5">
				<Input
					type="password"
					name="oldPassword"
					required
					label="Old Password"
					errors={user.errors}
					onChange={handleChange}
					value={formData.oldPassword}
				/>
				<Input
					type="password"
					name="newPassword"
					required
					label="New Password"
					errors={user.errors}
					onChange={handleChange}
					value={formData.newPassword}
				/>
				<Input
					type="password"
					name="confirmPassword"
					required
					label="Confirm Password"
					errors={user.errors}
					onChange={handleChange}
					value={formData.confirmPassword}
				/>
				<Button theme="primary" wide type="submit" loading={user.isLoading}>
					Change Password
				</Button>
			</form>
		</Card>
	);
};

export default ChangePassword;
