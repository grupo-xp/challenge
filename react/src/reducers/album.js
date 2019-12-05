import * as actions from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  albuns: JSON.parse(localStorage.getItem("albuns")) || {},
  current: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ALBUM_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actions.ALBUM_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case actions.ALBUM_SUCCESS:
      const albuns = {
        ...state.albuns,
        [action.id]: action.data
      };

      localStorage.setItem("albuns", JSON.stringify(albuns));

      return {
        ...state,
        isLoading: false,
        albuns,
        current: state.albuns[action.id] || action.data
      };
    case actions.ALBUM_CLEAR:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};
