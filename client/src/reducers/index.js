import { combineReducers } from "redux";

import auth from "./auth";
import tasks from "./tasks";
import water from "./water";
import journals from "./journals";

export default combineReducers({
	auth,
	water,
	tasks,
	journals,
});
