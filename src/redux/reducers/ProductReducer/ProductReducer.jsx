import types, { typesOfProducts } from '../../types/types'
const { GET_PRODUCT, GET_ALL_PRODUCTS } = typesOfProducts;

const initialState = {
  wishList: localStorage.getItem('wishList') ? parseInt(localStorage.getItem('wishList')) : 0,
  wishListItems: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : [],
  basket: localStorage.getItem('basket') ? parseInt(localStorage.getItem('basket')) : 0,
  basketList: localStorage.getItem('basketList') ? JSON.parse(localStorage.getItem('basketList')) : [],
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
        ...state, product: payload, productIsLoading: false
      }
    case GET_ALL_PRODUCTS:
      return {
        ...state, products: [...payload], productIsLoading: false
      }
    case types.ADD_TO_BASKET:
      console.log(payload)
      return {
        ...state,
        basketList: [
          ...state.basketList,
          payload.idCandidate
        ],
        basket: state.basket + payload.count
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

export const addToBasket = (idCandidate, count) => ({
  type: types.ADD_TO_BASKET,
  payload: {idCandidate, count}
})

export default productReducer
