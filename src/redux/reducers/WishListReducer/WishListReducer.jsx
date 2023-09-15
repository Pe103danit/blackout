const initialState = {
  wishCount: localStorage.getItem('wishList') ? Number(localStorage.getItem('wishList')) : 0,
  wishList: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : []
}
const toggleWishListR = (state, payload) => {
  const isWishItem = state.wishList.includes(payload)
  if (isWishItem) {
    state.wishList = state.wishList.filter(item => item !== payload)
  } else {
    state = {
      ...state,
      wishList: [...state.wishList, payload]
    }
  }
  localStorage.setItem('wishListItems', JSON.stringify(state.wishList))
  localStorage.setItem('wishList', state.wishList.length)
  state.wishCount = state.wishList.length
  return state
}

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishList: state.wishList.filter((item) => item !== action.payload),
      }
    case 'UPDATE_WISHLIST':
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      }
    case 'ToggleWishlist':
      return toggleWishListR(state, action.payload)
    default:
      return state
  }
}

export const toggleWishlist = (itemNo) => ({
    type: 'ToggleWishlist',
    payload: itemNo
})

export default WishListReducer