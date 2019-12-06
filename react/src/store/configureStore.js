import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import history from "../history";
import { TOKEN_RESET } from "../constants/actionTypes";

const logout = () => next => action => {
  next(action);
  if (action.type === TOKEN_RESET) history.push(`/`);
};

export default initialState =>
  createStore(rootReducer, initialState, applyMiddleware(thunk, logout));
