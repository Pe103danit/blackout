import { typesOfProducts } from '../../types/types'
const { GET_PRODUCT, GET_ALL_PRODUCTS } = typesOfProducts;

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
    default:
      return state;
  }
}

export const getProducts = (productsList) => ({
  type: GET_ALL_PRODUCTS,
  payload: productsList
})
export const getProductById = (product) => ({
  type: typesOfProducts.GET_PRODUCT,
  payload: product
})

export default productReducer