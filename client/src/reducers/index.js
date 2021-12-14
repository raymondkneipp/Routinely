import { combineReducers } from "redux";

import auth from "./auth";
import tasks from "./tasks";
import water from "./water";

export default combineReducers({
	auth,
	water,
	tasks,
});
