const initialState = {
    wishList: []
};

const WishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishList: [...state.wishList, action.payload],
            };
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                wishList: state.wishList.filter((item) => item !== action.payload),
            };
        default:
            return state;
    }
};

export default WishListReducer;