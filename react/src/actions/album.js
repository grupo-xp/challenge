import * as actions from "../constants/actionTypes";
import { resetToken } from "./auth";

const url = `${process.env.API}/albums`;

const albumFormater = ({ name, id, href, preview_url }) => ({
  id,
  name,
  href,
  preview_url
});
const format = ({ images, name, tracks }) => ({
  cover: images[0].url,
  name,
  tracks: tracks.items.map(albumFormater)
});

export const setLoading = () => ({
  type: actions.ALBUM_LOADING
});

export const setError = () => ({
  type: actions.ALBUM_ERROR
});

export const setSucces = (id, data) => ({
  type: actions.ALBUM_SUCCESS,
  id,
  data
});

export const reset = () => ({
  type: actions.ALBUM_CLEAR
});

export const find = id => (dispatch, getState) => {
  dispatch(setLoading());
  const { albuns } = getState().album;
  const { token } = getState().auth;

  albuns[id]
    ? dispatch(setSucces(id, albuns[id]))
    : fetch(`${url}/${id}`, {
        headers: new Headers({
          Authorization: `Bearer ${token}`
        })
      })
        .then(response => {
          if (!response.ok) {
            if (response.status === 401) dispatch(resetToken());
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(data => dispatch(setSucces(id, format(data))))
        .catch(() => dispatch(setError()));
};
