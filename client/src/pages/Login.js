import React, { useState, useEffect } from "react";
import { Header, Input, Card, Button, Alert } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const initialFormData = {
	email: "",
	password: "",
};

const Login = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = formData;

		dispatch(login(email, password));
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (user.isAuthenticated) {
			navigate("/dashboard");
		}
	}, [user, navigate]);

	return (
		<div className="max-w-sm mx-auto space-y-5 pt-20 p-5">
			<Header
				large
				icon={<FontAwesomeIcon icon={faSignInAlt} size="lg" />}
				title="Sign In"
			/>

			<Alert type="info">
				For Testing Purposes email: <strong>test@test.test</strong> password:{" "}
				<strong>test</strong>
			</Alert>
			<form onSubmit={handleSubmit}>
				<Card>
					<Input
						type="email"
						onChange={handleChange}
						name="email"
						autoFocus={true}
						label="Email"
						errors={user.errors}
						required
					/>
					<Input
						type="password"
						onChange={handleChange}
						name="password"
						label="Password"
						errors={user.errors}
						required
					/>

					<Button
						type="submit"
						theme="primary"
						wide
						icon={<FontAwesomeIcon icon={faSignInAlt} />}
						loading={user.isLoading}
					>
						Sign In
					</Button>
				</Card>
			</form>

			<div className="flex items-center justify-center">
				<Button type="button" ghost href="/register">
					Not Registered? Sign Up
				</Button>
			</div>
		</div>
	);
};

export default Login;
