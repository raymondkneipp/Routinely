import {
	JOURNAL_ADD,
	JOURNAL_GET,
	JOURNAL_UPDATE,
	JOURNAL_DELETE,
	JOURNAL_LOADING,
	JOURNAL_ERROR,
} from "./types";
import * as api from "../api/";

export const createJournal = (mood, notes) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.createJournal(mood, notes);

		dispatch({ type: JOURNAL_ADD, payload: data });
	} catch (error) {
		dispatch({ type: JOURNAL_ERROR, payload: error?.response?.data?.errors });
	}
};

export const getJournals = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.getJournals();

		dispatch({ type: JOURNAL_GET, payload: data });
	} catch (error) {
		dispatch({ type: JOURNAL_ERROR, payload: error?.response?.data?.errors });
	}
};

export const updateJournal = (mood, notes, id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.updateJournal(mood, notes, id);

		dispatch({ type: JOURNAL_UPDATE, payload: data });
	} catch (error) {
		dispatch({ type: JOURNAL_ERROR, payload: error?.response?.data?.errors });
	}
};

export const deleteJournal = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await api.deleteJournal(id);

		dispatch({ type: JOURNAL_DELETE, payload: data });
	} catch (error) {
		dispatch({ type: JOURNAL_ERROR, payload: error?.response?.data?.errors });
	}
};

export const setLoading = (isLoading) => async (dispatch) => {
	dispatch({ type: JOURNAL_LOADING, payload: isLoading });
};
