import { combineReducers } from "redux";

import album from "./album";
import search from "./search";

export default combineReducers({ album, search });
