import { combineReducers } from "redux";

import auth from "./auth";
import album from "./album";
import search from "./search";

export default combineReducers({ auth, album, search });
