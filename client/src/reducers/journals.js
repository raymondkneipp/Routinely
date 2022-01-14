import {
	JOURNAL_ADD,
	JOURNAL_GET,
	JOURNAL_UPDATE,
	JOURNAL_DELETE,
	JOURNAL_ERROR,
	JOURNAL_LOADING,
} from "../actions/types";

const initialState = {
	journals: [],
	errors: [],
	isLoading: false,
};

const journalReducer = (state = initialState, action) => {
	switch (action.type) {
		case JOURNAL_ADD:
			return {
				...state,
				journals: [...state.journals, action.payload],
				errors: [],
				isLoading: false,
			};
		case JOURNAL_GET:
			return {
				...state,
				journals: action.payload,
				errors: [],
				isLoading: false,
			};
		case JOURNAL_UPDATE:
			return {
				...state,
				errors: [],
				isLoading: false,
				journals: state.journals.map((journal) =>
					journal._id === action.payload._id ? action.payload : journal
				),
			};
		case JOURNAL_DELETE:
			return {
				...state,
				isLoading: false,
				journals: state.journals.filter(
					(journal) => journal._id !== action.payload._id
				),
			};
		case JOURNAL_ERROR:
			return { ...state, isLoading: false, errors: action.payload };
		case JOURNAL_LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

export default journalReducer;
