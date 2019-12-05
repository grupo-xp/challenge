import * as actions from "../constants/actionTypes";

const url = `${process.env.API}/albums`;

//TODO
const headers = new Headers();

const format = ({ images, name, tracks }) => ({
  cover: images[0].url,
  name,
  tracks: tracks.items.map(({ name, href, preview_url }) => ({
    name,
    href,
    preview_url
  }))
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

export const find = id => {
  return (dispatch, getState) => {
    dispatch(setLoading());
    const { albuns } = getState().album;

    albuns[id]
      ? dispatch(setSucces(id, albuns[id]))
      : fetch(`${url}/${id}`, {
          headers
        })
          .then(response => {
            if (!response.ok) {
              console.info(response.status === 401);
              throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(data => dispatch(setSucces(id, format(data))))
          .catch(() => dispatch(setError()));
  };
};
