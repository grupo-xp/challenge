import * as actions from "../constants/actionTypes";

const initialState = {
  token: sessionStorage.getItem("access_token") || ""
};

export default (state = initialState, { type, token }) => {
  switch (type) {
    case actions.TOKEN_SET:
      sessionStorage.setItem("access_token", token);
      return {
        token
      };
    case actions.TOKEN_RESET:
      sessionStorage.removeItem("access_token");
      return {
        token: undefined
      };
    default:
      return state;
  }
};
