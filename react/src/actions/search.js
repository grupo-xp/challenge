import * as actions from "../constants/actionTypes";
import querystring from "querystring";

const url = `${process.env.API}/search`;

//TODO
const headers = new Headers();

const format = ({ id, name, artists, images }) => ({
  id,
  name,
  artist: artists.map(({ name }) => name).join(", "),
  cover: images[1]["url"]
});

export const setLoading = query => ({
  type: actions.SEARCH_LOADING,
  query
});

export const setError = () => ({
  type: actions.SEARCH_ERROR
});

export const setSucces = (query, data) => ({
  type: actions.SEARCH_SUCCESS,
  query,
  data
});

export const reset = () => ({
  type: actions.SEARCH_CLEAR
});

export const doFetch = q => {
  return (dispatch, getState) => {
    dispatch(setLoading(q));
    const { lastsQuery, cache } = getState().search;

    lastsQuery.includes(q)
      ? dispatch(setSucces(q, cache[q]))
      : fetch(`${url}?${querystring.stringify({ q, type: "album" })}`, {
          headers
        })
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(({ albums }) =>
            dispatch(setSucces(q, albums.items.map(format)))
          )
          .catch(() => dispatch(setError()));
  };
};
