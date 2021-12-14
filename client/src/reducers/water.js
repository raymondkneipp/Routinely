import {
	WATER_ADD,
	WATER_GET,
	WATER_ERROR,
	WATER_LOADING,
	WATER_DELETE,
} from "../actions/types";

const initialState = {
	water: [],
	errors: [],
	isLoading: false,
};

const waterReducer = (state = initialState, action) => {
	switch (action.type) {
		case WATER_ADD:
			return {
				...state,
				water: [...state.water, action.payload],
				errors: [],
				isLoading: false,
			};
		case WATER_GET:
			return {
				...state,
				water: action.payload,
				errors: [],
				isLoading: false,
			};

		case WATER_DELETE:
			return {
				...state,
				isLoading: false,
				errors: [],
				water: state.water.filter((water) => water._id !== action.payload._id),
			};
		case WATER_ERROR:
			return { ...state, isLoading: false, errors: action.payload };
		case WATER_LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

export default waterReducer;
