const initialState = {
  wishCount: localStorage.getItem('wishList') ? Number(localStorage.getItem('wishList')) : 0,
  wishList: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : []
}
<<<<<<< HEAD
// const toggleWishListR = (state, payload) => {
//   const isWishItem = state.wishList.includes(payload.itemNo);
//   let updatedWishList = [...state.wishList];

//   if (isWishItem) {
//     updatedWishList = updatedWishList.filter((item) => item !== payload);
//   } else {
//     updatedWishList.push(payload);
//   }

//   localStorage.setItem('wishListItems', JSON.stringify(updatedWishList));
//   localStorage.setItem('wishList', updatedWishList.length);

//   return {
//     ...state,
//     wishList: updatedWishList,
//     wishCount: updatedWishList.length,
//   };
// };

const toggleWishListR = (state, payload) => {
  const isWishItem = state.wishList.some((item) => item.itemNo === payload.itemNo);

  let updatedWishList;

  if (isWishItem) {
    updatedWishList = state.wishList.filter((item) => item.itemNo !== payload.itemNo);
  } else {
    updatedWishList = [...state.wishList, payload];
  }

  localStorage.setItem('wishListItems', JSON.stringify(updatedWishList));
  localStorage.setItem('wishList', updatedWishList.length);

  return {
    ...state,
    wishList: updatedWishList,
    wishCount: updatedWishList.length,
  };
};
=======
>>>>>>> master

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WISHLIST':
      return {
        ...state,
        wishList: [...action.payload],
        wishCount: [action.payload.length]
      }
    default:
      return state
  }
}

<<<<<<< HEAD
export const toggleWishlist = ({ itemNo, imageUrls, name, currentPrice, model }) => ({
  type: 'ToggleWishlist',
  payload: {
    itemNo,
    imageUrl: imageUrls[0],
    name,
    currentPrice,
    model
  }
})

=======
>>>>>>> master
export default WishListReducer