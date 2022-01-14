import React, { useEffect } from "react";
import { getUser } from "./actions/auth";
import { useDispatch } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateOutlet } from "./components";
import { GuestNav } from "./components/Navbar";

import {
	Dashboard,
	CalendarPage,
	TasksPage,
	WaterPage,
	Landing,
	Login,
	Register,
	Settings,
} from "./pages";
import JournalsPage from "./pages/JournalsPage";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GuestNav />}>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="/" element={<Landing />} />
				</Route>
				<Route path="/" element={<PrivateOutlet />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="settings" element={<Settings />} />
					<Route path="calendar" element={<CalendarPage />} />
					<Route path="tasks" element={<TasksPage />} />
					<Route path="water" element={<WaterPage />} />
					<Route path="journals" element={<JournalsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
