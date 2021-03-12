import React, {useReducer} from 'react'

const INITIAL_STATE = {
    history: {},
    selectedAlbumId: null,
    playlist: {}
}

const SearchContext = React.createContext()

function searchReducer(state, action) {
    switch (action.type) {
      case 'SEARCH_WORD': {
          const { word, results } = action.payload
        return {
            ...state,
            history: { ...state.history, [word]: results}
        }
      }
      case 'SELECT_ALBUM': {
      return {
          ...state,
          selectedAlbumId: action.payload
        }
      }
      case 'OPEN_PLAYLIST': {
        const { id, results } = action.payload
        return {
            ...state,
            playlist: { ...state.playlist, [id]: results }
          }
        }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
}

export function SearchProvider ({children, value}) {
    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE)

    const saveResultOnSearchContext = (word, results) => dispatch({
        type: 'SEARCH_WORD',
        payload: {word, results}
    })

    const saveAlbumIdOnSearchContext = id => dispatch({
        type: 'SELECT_ALBUM',
        payload: id
    })

    const savePlaylistOnSearchContext = (id, results) => dispatch({
        type: 'OPEN_PLAYLIST',
        payload: {id, results}
    })

    const newValue = {
        searchContextValues: state,
        saveResultOnSearchContext,
        saveAlbumIdOnSearchContext,
        savePlaylistOnSearchContext,
        ...value
    }

    return <SearchContext.Provider value={newValue}>{children}</SearchContext.Provider>
  }

export default SearchContext

