export const addToWishList = (itemNo, wishCount) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: {itemNo, wishCount}
    };
};

export const removeFromWishList = (itemNo) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: itemNo
    };
};

export const updateWishList = (newWishList) => {
    return {
        type: 'UPDATE_WISHLIST',
        payload: newWishList
    };
};