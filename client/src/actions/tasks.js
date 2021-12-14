import {
	TASK_CREATE,
	TASK_GET,
	TASK_UPDATE,
	TASK_COMPLETE,
	TASK_INCOMPLETE,
	TASK_DELETE,
	TASK_ERROR,
	TASK_LOADING,
	TASK_CLEAR_ERRORS,
} from "./types";
import * as api from "../api/";

export const createTask = (name) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.createTask(name);

		dispatch({ type: TASK_CREATE, payload: data });
	} catch (error) {
		dispatch({ type: TASK_ERROR, payload: error?.response?.data?.errors });
	}
};

export const updateTask = (name, id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.updateTask(name, id);

		dispatch({ type: TASK_UPDATE, payload: data });
	} catch (error) {
		dispatch({ type: TASK_ERROR, payload: error?.response?.data?.errors });
	}
};

export const completeTask = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.completeTask(id);

		dispatch({ type: TASK_COMPLETE, payload: data });
	} catch (error) {
		dispatch({ type: TASK_ERROR, payload: error?.response?.data?.errors });
	}
};

export const incompleteTask = (id, date) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.incompleteTask(id, date);

		dispatch({ type: TASK_INCOMPLETE, payload: data });
	} catch (error) {
		dispatch({ type: TASK_ERROR, payload: error?.response?.data?.errors });
	}
};

export const deleteTask = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.deleteTask(id);

		dispatch({ type: TASK_DELETE, payload: data });
	} catch (error) {
		dispatch({ type: TASK_ERROR, payload: error?.response?.data?.errors });
	}
};

export const getTasks = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.getTasks();

		dispatch({ type: TASK_GET, payload: data });
	} catch (error) {
		dispatch({ type: TASK_ERROR, payload: error?.response?.data?.errors });
	}
};

export const setLoading = (isLoading) => async (dispatch) => {
	dispatch({ type: TASK_LOADING, payload: isLoading });
};

export const clearErrors = () => async (dispatch) => {
	dispatch({ type: TASK_CLEAR_ERRORS });
};
