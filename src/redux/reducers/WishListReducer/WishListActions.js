export const removeFromWishList = (itemNo) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: itemNo
    }
}