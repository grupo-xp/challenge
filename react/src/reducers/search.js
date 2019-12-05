import * as actions from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  lastsQuery: JSON.parse(localStorage.getItem("lastsQuery")) || [],
  query: "",
  cache: JSON.parse(localStorage.getItem("cache")) || {},
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
      const cache = {
        ...state.cache,
        [action.query]: action.data
      };
      const lastsQuery = action.data.length
        ? [...state.lastsQuery, action.query]
        : state.lastsQuery;

      localStorage.setItem("cache", JSON.stringify(cache));
      localStorage.setItem("lastsQuery", JSON.stringify(lastsQuery));

      return {
        ...state,
        isLoading: false,
        cache,
        lastsQuery,
        data: state.cache[action.query] || action.data
      };
    case actions.SEARCH_CLEAR:
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
};
