import React, { useState } from "react";
import { Header, Card, Input, Button } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faUser,
	faEdit,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../actions/auth";

const ChangeName = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);
	const [fname, setFname] = useState(user.fname);
	const [lname, setLname] = useState(user.lname);
	const [edit, setEdit] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(changeName(fname, lname));

		setEdit(null);
	};

	return (
		<Card>
			<Header icon={<FontAwesomeIcon icon={faUser} />} title="User" />
			<form onSubmit={handleSubmit} className="space-y-5">
				{edit === "fname" ? (
					<div className="flex items-end space-x-5">
						<Input
							type="text"
							name="fname"
							required
							autoFocus={true}
							label="First Name"
							errors={user.errors}
							onChange={(e) => setFname(e.target.value)}
							value={fname}
						/>
						<Button
							square
							theme="success"
							type="submit"
							loading={user.isLoading}
						>
							<FontAwesomeIcon icon={faCheck} />
						</Button>
						<Button
							square
							ghost
							type="button"
							loading={user.isLoading}
							onClick={(e) => setEdit(null)}
						>
							<FontAwesomeIcon icon={faTimes} />
						</Button>
					</div>
				) : (
					<div>
						<h6 className="text-sm text-white mb-2">First Name</h6>
						<div className="flex">
							<span className={`py-2 px-4 border border-transparent flex-1`}>
								{user.fname}
							</span>
							<Button
								square
								ghost
								type="button"
								loading={user.isLoading}
								onClick={(e) => setEdit("fname")}
							>
								<FontAwesomeIcon icon={faEdit} />
							</Button>
						</div>
					</div>
				)}

				{edit === "lname" ? (
					<div className="flex items-end space-x-5">
						<Input
							type="text"
							name="lname"
							required
							autoFocus={true}
							label="Last Name"
							errors={user.errors}
							onChange={(e) => setLname(e.target.value)}
							value={lname}
						/>
						<Button
							square
							theme="success"
							type="submit"
							loading={user.isLoading}
						>
							<FontAwesomeIcon icon={faCheck} />
						</Button>
						<Button
							square
							ghost
							type="button"
							loading={user.isLoading}
							onClick={(e) => setEdit(null)}
						>
							<FontAwesomeIcon icon={faTimes} />
						</Button>
					</div>
				) : (
					<div>
						<h6 className="text-sm text-white mb-2">Last Name</h6>
						<div className="flex">
							<span className={`py-2 px-4 border border-transparent flex-1`}>
								{user.lname}
							</span>
							<Button
								square
								ghost
								type="button"
								loading={user.isLoading}
								onClick={(e) => setEdit("lname")}
							>
								<FontAwesomeIcon icon={faEdit} />
							</Button>
						</div>
					</div>
				)}
			</form>
		</Card>
	);
};

export default ChangeName;
