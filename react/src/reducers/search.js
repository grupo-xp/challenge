import * as actions from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  query: "",
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_LOADING:
      return {
        ...state,
        query: action.query,
        isLoading: true
      };
    case actions.SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case actions.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case actions.SEARCH_CLEAR:
      return initialState;
    default:
      return state;
  }
};
