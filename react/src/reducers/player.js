import * as actions from "../constants/actionTypes";

const initialState = {
  track: {},
  list: {},
  paused: false,
  current: new Audio(),
  isloadingAlbum: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.PLAYER_ADD_TRACK:
      return {
        ...state,
        current: action.current,
        track: action.track,
        list: action.list,
        isloadingAlbum: false
      };
    case actions.PLAYER_PLAY:
      state.current.play();
      return {
        ...state,
        paused: false
      };
    case actions.PLAYER_STOP:
      state.current.pause();
      return {
        ...state,
        paused: true
      };
    case actions.PLAYER_WAITING_ALBUM:
      return {
        ...state,
        isloadingAlbum: true
      };
    case actions.ALBUM_SUCCESS:
      if (!state.isloadingAlbum) return state;
      const [track] = action.data.tracks;
      const current = new Audio(track.preview_url);
      state.current.pause();
      current.play();
      return {
        ...state,
        current,
        track,
        list: action.data,
        isloadingAlbum: false
      };
    default:
      return state;
  }
};
