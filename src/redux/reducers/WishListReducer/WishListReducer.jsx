const initialState = {
  wishCount: localStorage.getItem('wishList') ? Number(localStorage.getItem('wishList')) : 0,
  wishList: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : []
}

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WISHLIST':
      return {
        ...state,
        wishList: [...action.payload],
        wishCount: [action.payload.length]
      }
    case 'LOGOUT_WISHLIST':
      return {
        ...state,
        wishList: action.payload,
        wishCount: [0]
      }
    default:
      return state
  }
}

export default WishListReducer