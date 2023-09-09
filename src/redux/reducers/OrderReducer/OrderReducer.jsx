import types from '../../types/types'

const initialState = {
  country: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  isSubscribed: '',
  delivery: '',
  address: '',
  apartment: '',
  city: '',
  postcode: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
  cardName: ''
}

const OrderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_INFORMATION:
      console.log(payload)
      return {
        ...state,
        ...payload
      }
    case types.SET_SHIPPING:
      return {
        ...state,
        ...payload
      }
    case types.SET_PAYMENT:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export const setInformation = (info) => ({
  type: types.SET_INFORMATION,
  payload: info
})

export const setShipping = (info) => ({
  type: types.SET_SHIPPING,
  payload: info
})

export const setPayment = (info) => ({
  type: types.SET_PAYMENT,
  payload: info
})

export default OrderReducer