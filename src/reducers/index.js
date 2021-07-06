import { combineReducers } from "redux";

import posts from "./posts";
import authReducer from "./auth";
import subs from "./sub";

export default combineReducers({ posts, authReducer, subs });
