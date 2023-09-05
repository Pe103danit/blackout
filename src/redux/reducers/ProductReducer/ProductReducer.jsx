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
const updateBasketR = (state, payload) => {
  let basketCount = 0
  payload.forEach(item => {
    basketCount += item.countToCart
  })
  localStorage.setItem('basket', basketCount)
  return {
    ...state,
    basketList: [
      ...payload
    ],
    basket: basketCount
  }
}

const changeBasketCountR = (state, payload) => {
  let sumCountBasket = 0
  const newBasketList = state.basketList.map(itemBasket => {
    if (itemBasket.itemNo === payload.id) {
      console.log(`old - ${itemBasket.countToCart}`)
      itemBasket = {
        ...itemBasket,
        countToCart: payload.newCountValue
      }
    }
    sumCountBasket += itemBasket.countToCart
    console.log(`new -- ${payload.newCountValue}`)
    return itemBasket
  })
   console.log(`Reducer --- ${sumCountBasket}`)
    return {
      ...state,
      basket: sumCountBasket,
      basketList: newBasketList
    }
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
      return {
        ...state,
        basketList: [
          ...state.basketList,
          payload.idCandidate
        ],
        basket: state.basket + payload.count
      }
    case types.UPDATE_BASKET:
      return updateBasketR(state, payload)
    case types.CHANGE_COUNT_BASKET:
      return changeBasketCountR(state, payload)
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

export const updateBasket = (listCandidate) => ({
  type: types.UPDATE_BASKET,
  payload: listCandidate
})

export const changeCountBasket = (id, newCountValue) => ({
  type: types.CHANGE_COUNT_BASKET,
  payload: {id, newCountValue}
})

export default productReducer
