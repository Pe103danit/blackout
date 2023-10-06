export const removeFromWishList = (product) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: product
    }
}