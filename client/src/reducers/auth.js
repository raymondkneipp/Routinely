import {
	AUTH,
	AUTH_ERROR,
	AUTH_LOADING,
	AUTH_LOGOUT,
	AUTH_GET,
	AUTH_CHANGE_PASSWORD,
	AUTH_CHANGE_NAME,
} from "../actions/types.js";

const initialState = {
	isAuthenticated: false,
	fname: null,
	lname: null,
	token: null,
	errors: null,
	isLoading: false,
};

const authReducer = (user = initialState, action) => {
	switch (action.type) {
		case AUTH:
			localStorage.setItem("token", JSON.stringify(action.payload.token));
			return {
				...user,
				token: action.payload.token,
				isAuthenticated: true,
				isLoading: false,
				errors: null,
			};
		case AUTH_GET:
			return {
				...user,
				isAuthenticated: true,
				...action.payload,
				isLoading: false,
				errors: null,
			};
		case AUTH_LOGOUT:
			localStorage.clear();

			return initialState;
		case AUTH_CHANGE_PASSWORD:
			return { ...user, errors: [], isLoading: false };
		case AUTH_CHANGE_NAME:
			return {
				...user,
				errors: [],
				isLoading: false,
				fname: action.payload.fname,
				lname: action.payload.lname,
			};
		case AUTH_LOADING:
			return { ...user, isLoading: action.payload };
		case AUTH_ERROR:
			return { ...user, errors: action.payload, isLoading: false };
		default:
			return user;
	}
};

export default authReducer;
