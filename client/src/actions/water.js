import {
	WATER_ADD,
	WATER_GET,
	WATER_DELETE,
	WATER_ERROR,
	WATER_LOADING,
} from "./types";
import * as api from "../api/";

export const addWater = (amount) => async (dispatch) => {
	dispatch(setLoading(true));

	try {
		const { data } = await api.addWater(amount);

		dispatch({ type: WATER_ADD, payload: data });
	} catch (error) {
		dispatch({ type: WATER_ERROR, payload: error?.response?.data?.errors });
	}
};

export const getWater = () => async (dispatch) => {
	dispatch(setLoading(true));

	try {
		const { data } = await api.getWater();

		dispatch({ type: WATER_GET, payload: data });
	} catch (error) {
		dispatch({ type: WATER_ERROR, payload: error?.response?.data?.errors });
	}
};

export const deleteWater = (id) => async (dispatch) => {
	dispatch(setLoading(true));

	try {
		const { data } = await api.deleteWater(id);

		dispatch({ type: WATER_DELETE, payload: data });
	} catch (error) {
		dispatch({ type: WATER_ERROR, payload: error?.response?.data?.errors });
	}
};

export const setLoading = (isLoading) => async (dispatch) => {
	dispatch({ type: WATER_LOADING, payload: isLoading });
};
