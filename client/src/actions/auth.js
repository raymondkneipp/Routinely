import {
	AUTH,
	AUTH_GET,
	AUTH_LOGOUT,
	AUTH_ERROR,
	AUTH_LOADING,
	AUTH_CHANGE_PASSWORD,
	AUTH_CHANGE_NAME,
} from "./types.js";
import * as api from "../api/";

export const login = (email, password) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.login(email, password);

		dispatch({ type: AUTH, payload: data });
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: error?.response?.data?.errors });
	}
};

export const register =
	(fname, lname, email, password, confirmPassword) => async (dispatch) => {
		dispatch(setLoading(true));
		try {
			const { data } = await api.register(
				fname,
				lname,
				email,
				password,
				confirmPassword
			);

			dispatch({ type: AUTH, payload: data });
		} catch (error) {
			dispatch({ type: AUTH_ERROR, payload: error?.response?.data?.errors });
		}
	};

export const getUser = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.getUser();

		dispatch({ type: AUTH_GET, payload: data });
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: error?.response?.data?.errors });
	}
};

export const changePassword =
	(oldPassword, newPassword, confirmPassword) => async (dispatch) => {
		dispatch(setLoading(true));
		try {
			const { data } = await api.changePassword(
				oldPassword,
				newPassword,
				confirmPassword
			);

			dispatch({ type: AUTH_CHANGE_PASSWORD, payload: data });
		} catch (error) {
			dispatch({ type: AUTH_ERROR, payload: error?.response?.data?.errors });
		}
	};

export const changeName = (fname, lname) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.changeName(fname, lname);

		dispatch({ type: AUTH_CHANGE_NAME, payload: data });
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: error?.response?.data?.errors });
	}
};

export const logout = () => async (dispatch) => {
	dispatch({ type: AUTH_LOGOUT });
};

export const setLoading = (isLoading) => async (dispatch) => {
	dispatch({ type: AUTH_LOADING, payload: isLoading });
};
