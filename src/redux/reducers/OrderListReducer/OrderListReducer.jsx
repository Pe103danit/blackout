import types from '../../types/types'

export const setOrderList = (orderList) => (
  {
    type: types.SET_ORDER_LIST,
    payload: orderList,
  }
)

const initialState = { orderList: null, orderIsLoading: true }
const OrderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ORDER_LIST:
      if (!action.payload) {
        return { ...state, orderList: action.payload, orderIsLoading: true }
      }
      return { ...state, orderList: action.payload, orderIsLoading: false }
    default:
      return state
  }
}

export default OrderListReducer