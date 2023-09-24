import types from '../../types/types';

const initialState = {
  user: '',
  token: localStorage.getItem('tokenParts') || null,
  userIsLoading: true
}

export const setUser = (user) => (
  {
    type: types.SET_USER,
    payload: user
  }
)

export const setToken = (token) => (
  {
    type: types.SET_TOKEN,
    payload: token
  }
)

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload, userIsLoading: false }
    case types.SET_TOKEN:
      return { ...state, token: action.payload }
    default:
      return state
  }
}
export default SessionReducer