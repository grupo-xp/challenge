import { combineReducers } from "redux";

import auth from "./auth";
import album from "./album";
import search from "./search";
import player from "./player";

export default combineReducers({ auth, album, player, search });
