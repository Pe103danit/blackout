import types from '../../types/types'

const initialState = {
  lightTheme: localStorage.getItem('theme') === 'light',
  searchInput: false,
  navBarStatus: false
}

const UIStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME:
      localStorage.setItem('theme', `${state.lightTheme ? 'dark' : 'light'}`)
      return {
        ...state,
        lightTheme: !state.lightTheme
      }
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

export const toggleTheme = () => ({
  type: types.TOGGLE_THEME
})

export const toggleSearchInput = () => ({
  type: types.TOGGLE_SEARCH_INPUT
})

export const toggleNavBar = () => ({
  type: types.TOGGLE_NAV_BAR
})

export default UIStateReducer