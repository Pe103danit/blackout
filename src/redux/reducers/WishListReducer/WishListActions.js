export const addToWishList = (itemNo) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: itemNo
    };
};

export const removeFromWishList = (itemNo) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: itemNo
    };
};