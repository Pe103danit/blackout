import types from '../../types/types';
import { instance } from '../../../components/assets/axiosUrl'

const setUser = (user) => (
  {
    type: types.SET_USER,
    payload: user
  }
)
export const login = ({email, password}) => async (dispatch) => {
  console.log(email);
  try {
    const res = await instance.post('/api/customer/login', {
      email, password
    })
      .then(function (response) {
        dispatch(setUser(response))
      })
      .catch(function (error) {
        console.log(error);
      })
  } catch (error) {
    console.log(error);
  }
}
const initialState = { user: null }
const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return state
    default:
      return state
  }
}
export default SessionReducer