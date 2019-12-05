import * as actions from "../constants/actionTypes";
import querystring from "querystring";

const url = `${process.env.API}/search`;

//TODO
const headers = new Headers();

export const setLoading = query => ({
  type: actions.SEARCH_LOADING,
  query
});

export const setError = () => ({
  type: actions.SEARCH_ERROR
});

export const setSucces = data => ({
  type: actions.SEARCH_SUCCESS,
  data
});

export const reset = () => ({
  type: actions.SEARCH_CLEAR
});

export const doFetch = q => {
  return dispatch => {
    dispatch(setLoading(q));
    fetch(`${url}?${querystring.stringify({ q, type: "album" })}`, { headers })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.info("response", response);
        return response;
      })
      .then(response => response.json())
      .then(({ albums }) => dispatch(setSucces(albums.items)))
      .catch(() => dispatch(setError()));
  };
};
