import { typesOfProducts } from '../../types/types'
import { instance } from '../../../components/assets/axiosUrl'
const { GET_PRODUCT, GET_ALL_PRODUCTS } = typesOfProducts

const initialState = {
  wishList: localStorage.getItem('wishList') ? parseInt(localStorage.getItem('wishList')) : 0,
  basket: localStorage.getItem('basket') ? parseInt(localStorage.getItem('basket')) : 0,
  products: [],
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
        ...state, products: [...payload]
      }
    default:
      return state
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
  type: typesOfProducts.GET_ALL_PRODUCTS,
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

 export default productReducer