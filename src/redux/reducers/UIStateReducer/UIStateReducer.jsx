import types from '../../types/types'

const initialState = {
  searchInput: false
}

const UIStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: !state.searchInput
      }
    default:
      return state
  }
}

export const toggleSearchInput = () => ({
  type: types.TOGGLE_SEARCH_INPUT
})

export default UIStateReducer