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
} from "../actions/types";

const initialState = {
	tasks: [],
	errors: [],
	isLoading: false,
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case TASK_CREATE:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
				errors: [],
				isLoading: false,
			};
		case TASK_GET:
			return {
				...state,
				tasks: action.payload,
				errors: [],
				isLoading: false,
			};
		case TASK_UPDATE:
			return {
				...state,
				errors: [],
				isLoading: false,
				tasks: state.tasks.map((task) =>
					task._id === action.payload._id ? action.payload : task
				),
			};
		case TASK_COMPLETE:
			return {
				...state,
				isLoading: false,
				tasks: state.tasks.map((task) =>
					task._id === action.payload._id ? action.payload : task
				),
			};
		case TASK_INCOMPLETE:
			return {
				...state,
				isLoading: false,
				tasks: state.tasks.map((task) =>
					task._id === action.payload._id ? action.payload : task
				),
			};
		case TASK_DELETE:
			return {
				...state,
				isLoading: false,
				tasks: state.tasks.filter((task) => task._id !== action.payload._id),
			};
		case TASK_ERROR:
			return { ...state, isLoading: false, errors: action.payload };
		case TASK_LOADING:
			return { ...state, isLoading: action.payload };
		case TASK_CLEAR_ERRORS:
			return { ...state, errors: [] };
		default:
			return state;
	}
};

export default taskReducer;
