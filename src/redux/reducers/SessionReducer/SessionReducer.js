import types from '../../types/types';

export const setUser = (user) => (
  {
    type: types.SET_USER,
    payload: user
  }
)

const initialState = { user: null }
const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {...state, user: action.payload}
    default:
      return state
  }
}
export default SessionReducer