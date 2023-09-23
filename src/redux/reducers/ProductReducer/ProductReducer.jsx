import types, { typesOfProducts } from '../../types/types'

const { GET_PRODUCT, GET_ALL_PRODUCTS } = typesOfProducts

const initialState = {
  basket: localStorage.getItem('basket') ? parseInt(localStorage.getItem('basket')) : 0,
  basketList: localStorage.getItem('basketList') ? JSON.parse(localStorage.getItem('basketList')) : [],
  basketCard: {},
  totalBasketSum: localStorage.getItem('totalBasketSum') ? parseInt(localStorage.getItem('totalBasketSum')) : 0,
  products: [],
  isOpenCartWindow: false,
  productsPerPage: [],
  productIsLoading: true,
  portablePowerStation: [],
  portablePowerStationIsLoading: true,
  powerBanks: [],
  powerBanksIsLoading: true,
  product: {},
  priceFilter: [],
  selectValue: ''
}
const getTotalSum = (productsList, basketList) => {
  let totalSum = 0
  productsList.forEach(product => {
    let statusFind = false
    let countCandidate = null
    basketList.forEach(basketItem => {
      if (basketItem.itemNo === product.itemNo) {
        statusFind = true
        countCandidate = basketItem.countToCart
      }
    })
    if (statusFind) {
      totalSum += product.currentPrice * countCandidate
    }
  })
  localStorage.setItem('totalBasketSum', totalSum)
  return Number(totalSum.toFixed(2))
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
      itemBasket = {
        ...itemBasket,
        countToCart: payload.newCountValue
      }
    }
    sumCountBasket += itemBasket.countToCart
    return itemBasket
  })
  return {
    ...state,
    basket: sumCountBasket,
    basketList: newBasketList,
    totalBasketSum: getTotalSum(state.products, newBasketList)
  }
}

const deleteBasketItemR = (state, payload) => {
  let allCountBasket = 0
  const newBasketList = state.basketList.filter(basketItem => basketItem.itemNo !== payload && basketItem)
  newBasketList.forEach(item => {
    allCountBasket += item.countToCart
  })
  localStorage.setItem('basket', allCountBasket)
  localStorage.setItem('basketList', JSON.stringify(newBasketList))
  return ({
    ...state,
    basket: allCountBasket,
    basketList: [
      ...newBasketList
    ],
    totalBasketSum: getTotalSum(state.products, newBasketList)
  })
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

    case types.ADD_CATEGORY_TO_FILTER:
      return {
        ...state, categories: [...payload]
      }

    case types.CLEAR_ALL_CATEGORIES_TO_FILTER:
      return {
        ...state, categories: []
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

    case types.TOGGLE_PRODUCT_TO_CARD:
      return { ...state, basketCard: payload, isOpenCartWindow: !state.isOpenCartWindow }

    case types.IS_OPEN_CART_WINDOW:
      return { ...state, isOpenCartWindow: true }

    case types.CHANGE_COUNT_BASKET:
      return changeBasketCountR(state, payload)

    case types.DELETE_BASKET_ITEM:
      return deleteBasketItemR(state, payload)

    case types.SUCCESSFUL_ORDER:
      localStorage.setItem('basket', '0')
      localStorage.setItem('basketList', JSON.stringify([]))
      localStorage.setItem('totalBasketSum', JSON.stringify(0))
      return {
        ...state,
        basket: 0,
        basketList: [],
        totalBasketSum: 0
      }

    case types.GET_PRODUCTS_PER_PAGE: {
      return {
        ...state,
        productsPerPage: [...payload]
      }
    }

    case types.SET_PRICE_FILTER: {
      return {
        ...state,
        priceFilter: [...payload]
      }
    }

    case types.CLEAR_PRICE_FILTER: {
      return {
        ...state,
        priceFilter: []
      }
    }

    case types.SET_SELECT_VALUE:
      return {
        ...state,
        selectValue: payload,
      };

    case types.CLEAR_SELECT_VALUE: {
      return {
        ...state,
        selectValue: ''
      }
    }

    default:
      return state
  }
}

export const getProducts = (productsList) => ({
  type: GET_ALL_PRODUCTS,
  payload: productsList
})

export const addToBasket = (idCandidate, count) => ({
  type: types.ADD_TO_BASKET,
  payload: { idCandidate, count }
})

export const addCategoryToFilter = (categories) => ({
  type: types.ADD_CATEGORY_TO_FILTER,
  payload: categories
})

export const clearAllCategoriesToFilter = () => ({
  type: types.CLEAR_ALL_CATEGORIES_TO_FILTER
})

export const updateBasket = (listCandidate) => ({
  type: types.UPDATE_BASKET,
  payload: listCandidate
})

export const changeCountBasket = (id, newCountValue) => ({
  type: types.CHANGE_COUNT_BASKET,
  payload: { id, newCountValue }
})

export const deleteBasketItem = (id) => ({
  type: types.DELETE_BASKET_ITEM,
  payload: id
})
export const toggleProductToCart = (product) => ({
  type: types.TOGGLE_PRODUCT_TO_CARD,
  payload: product
})
export const successfulOrder = () => ({
  type: types.SUCCESSFUL_ORDER
})

export const getProductsPerPage = (productsList) => ({
  type: types.GET_PRODUCTS_PER_PAGE,
  payload: productsList
})

export const setPriceFilter = (currentPrice) => ({
  type: types.SET_PRICE_FILTER,
  payload: currentPrice
})

export const clearPriceFilter = () => ({
  type: types.CLEAR_PRICE_FILTER
})

export const setSelectValue = (value) => ({
  type: types.SET_SELECT_VALUE,
  payload: value
});

export const clearSelectValue = () => ({
  type: types.CLEAR_PRICE_FILTER
})

export default productReducer
