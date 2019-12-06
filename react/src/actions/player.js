import * as actions from "../constants/actionTypes";
import { find } from "./album";

const addTrack = (track, list) => dispatch => {
  const current = new Audio(track.preview_url);
  current.onended = () => {
    const nextId = list.tracks.indexOf(track) + 1;
    const nextTrack = list.tracks[nextId];
    nextTrack && dispatch(play(nextTrack, list));
  };
  dispatch({ type: actions.PLAYER_STOP });
  return dispatch([
    {
      type: actions.PLAYER_ADD_TRACK,
      current,
      track,
      list
    },
    { type: actions.PLAYER_PLAY }
  ]);
};

export const play = (track, list) => (dispatch, getState) => {
  const { current, track: currentTrack } = getState().player;
  const isSame = currentTrack === track;
  if (!isSame) return dispatch(addTrack(track, list)(dispatch));
  return current.paused
    ? dispatch({ type: actions.PLAYER_PLAY })
    : dispatch({ type: actions.PLAYER_STOP });
};

export const playAlbum = hash => dispatch => {
  dispatch([{ type: actions.PLAYER_WAITING_ALBUM }, find(hash)]);
};
