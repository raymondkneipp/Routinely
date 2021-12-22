import React, { useState, useEffect } from "react";
import { Header, Input, Card, Button } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const initialFormData = {
	fname: "",
	lname: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Register = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { fname, lname, email, password, confirmPassword } = formData;

		dispatch(register(fname, lname, email, password, confirmPassword));
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
		<div>
			<div className="max-w-sm mx-auto space-y-5 pt-20 p-5">
				<Header
					large
					icon={<FontAwesomeIcon icon={faUserPlus} size="lg" />}
					title="Sign Up"
				/>
				<form onSubmit={handleSubmit}>
					<Card>
						<Input
							type="text"
							onChange={handleChange}
							name="fname"
							autoFocus={true}
							label="First Name"
							errors={user.errors}
							required
						/>
						<Input
							type="text"
							onChange={handleChange}
							name="lname"
							label="Last Name"
							errors={user.errors}
							required
						/>
						<Input
							type="email"
							onChange={handleChange}
							name="email"
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
						<Input
							type="password"
							name="confirmPassword"
							label="Confirm Password"
							onChange={handleChange}
							errors={user.errors}
							required
						/>

						<Button
							type="submit"
							theme="primary"
							wide
							icon={<FontAwesomeIcon icon={faUserPlus} />}
							loading={user.loading}
						>
							Sign Up
						</Button>
					</Card>
				</form>

				<div className="flex items-center justify-center">
					<Button type="button" ghost href="/login">
						Already registered? Sign In
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Register;
