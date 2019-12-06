import * as actions from "../constants/actionTypes";
import cryptoRandomString from "crypto-random-string";
import queryString from "querystring";

const STATE_KEY = process.env.STATE_KEY || "STATE_KEY";
const CLIENT_ID = process.env.CLIENT_ID || false;
const url = process.env.AUTH;

const redirect = () => {
  const state = cryptoRandomString({ length: 10 });
  sessionStorage.setItem(STATE_KEY, state);
  const params = {
    response_type: "token",
    client_id: CLIENT_ID,
    redirect_uri: `${location.origin}${location.pathname}`,
    state
  };
  window.location = `${url}?${queryString.stringify(params)}`;
};

export const resetToken = () => ({
  type: actions.TOKEN_RESET,
  token: undefined
});

export const setToken = token => ({
  type: actions.TOKEN_SET,
  token
});

export const getToken = () => {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    token ? dispatch(setToken(token)) : redirect();
  };
};
