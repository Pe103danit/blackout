import types from '../../types/types'

const initialState = {
  searchInput: false,
  navBarStatus: false
}

const UIStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: !state.searchInput
      }
    case types.TOGGLE_NAV_BAR:
      return {
        ...state,
        navBarStatus: !state.navBarStatus
      }
    default:
      return state
  }
}

export const toggleSearchInput = () => ({
  type: types.TOGGLE_SEARCH_INPUT
})

export const toggleNavBar = () => ({
  type: types.TOGGLE_NAV_BAR
})

export default UIStateReducer