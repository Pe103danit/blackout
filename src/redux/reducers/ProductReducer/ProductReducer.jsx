import { GET_PORTABLE_POWER_STATION, GET_POWER_BANKS } from './actionCategoryReducer';
import { typesOfProducts } from '../../types/types'
import { instance } from '../../../components/assets/axiosUrl';
const { GET_PRODUCT, GET_ALL_PRODUCTS } = typesOfProducts;
// const { GET_PORTABLE_POWER_STATION, GET_POWER_BANKS } = typesOfCategory;

const initialState = {
  wishList: localStorage.getItem('wishList') ? parseInt(localStorage.getItem('wishList')) : 0,
  basket: localStorage.getItem('basket') ? parseInt(localStorage.getItem('basket')) : 0,
  products: [],
  productIsLoading: true,
  portablePowerStation: [],
  portablePowerStationIsLoading: true,
  powerBanks: [],
  powerBanksIsLoading: true,
  product: {}
}
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state, product: payload
      }
    case GET_ALL_PRODUCTS:
      return {
        ...state, products: [...payload], productIsLoading: false
      }
    case GET_PORTABLE_POWER_STATION:
      return {
        ...state, portablePowerStation: [...payload], portablePowerStationIsLoading: false
      }
    case GET_POWER_BANKS:
      return {
        ...state, powerBanks: [...payload], powerBanksIsLoading: false
      }
    default:
      return state;
  }
}
// const actionGetProductById = (data) => (
//     {
//         type: GET_PRODUCT,
//         payload: data
//     }
// )
// const actionGetAllProducts = (data) => (
//     {
//         type: GET_ALL_PRODUCTS,
//         payload: data
//     }
// )

export const getProducts = (productsList) => ({
  type: GET_ALL_PRODUCTS,
  payload: productsList
})

export const getProductById = (id) => async (dispatch) => {
  // const res = await fetch(`/api/products/${id}`)
  // if (res.ok) {
  //     const data = await res.json()
  //     dispatch(actionGetProductById(data))
  // }
  const res = await instance.get(`/api/products/${id}`)
  console.log(res)
}

export const getPortablePowerStation = (productsList) => ({
  type: GET_PORTABLE_POWER_STATION,
  payload: productsList
})

export default productReducer