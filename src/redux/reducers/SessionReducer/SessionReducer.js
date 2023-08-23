import types from "../../types/types";
import { instance } from '../../../components/assets/axiosUrl'

const setUser = (user) => (
    { 
        type: types.SET_USER, 
        payload: user 
    }
) 
export const Login = (email, password) => async(dispatch) => {
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
        
    }
}
const initialState = {user: null}
const SessionReducer = (state = initialState, action) => {

}
export default SessionReducer