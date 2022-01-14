import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/" });
const API = axios.create({ baseURL: "https://getroutinely.herokuapp.com/" });

API.interceptors.request.use((req) => {
	if (localStorage.getItem("token")) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			localStorage.getItem("token")
		)}`;
	}

	return req;
});

// Task endpoints
export const createTask = (name) => API.post("tasks", { name });
export const getTasks = () => API.get("tasks");
export const updateTask = (name, id) => API.patch(`tasks/${id}`, { name });
export const completeTask = (id) => API.post(`tasks/${id}/completed`);
export const incompleteTask = (id, date) =>
	API.patch(`tasks/${id}/completed`, { date });
export const deleteTask = (id) => API.delete(`tasks/${id}`);

// Water endpoints
export const getWater = () => API.get("waters");
export const addWater = (amount) => API.post("waters", { amount });
export const deleteWater = (id) => API.delete(`waters/${id}`);

// Journal endpoints
export const getJournals = () => API.get("journals");
export const createJournal = (mood, note) =>
	API.post("journals", { mood, note });
export const updateJournal = (mood, note, id) =>
	API.put(`journals/${id}`, { mood, note });
export const deleteJournal = (id) => API.delete(`journals/${id}`);

// Auth endpoints
export const login = (email, password) =>
	API.post("user/login", { email, password });
export const register = (fname, lname, email, password, confirmPassword) =>
	API.post("user/register", { fname, lname, email, password, confirmPassword });
export const getUser = () => API.get("user");
export const changePassword = (oldPassword, newPassword, confirmPassword) =>
	API.patch("user/password", { oldPassword, newPassword, confirmPassword });
export const changeName = (fname, lname) =>
	API.patch("user/name", { fname, lname });
