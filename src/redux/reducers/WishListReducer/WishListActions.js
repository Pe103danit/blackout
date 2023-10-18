export const setWishList = (wishList) => {
    return {
        type: 'SET_WISHLIST',
        payload: wishList
    }
}

export const logoutWishList = () => {
    return {
        type: 'LOGOUT_WISHLIST',
        payload: []
    }
}