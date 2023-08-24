import { instance } from '../../../components/assets/axiosUrl';

export const fetchProductsStart = () => ({
    type: 'FETCH_PRODUCTS_START',
});

export const fetchProductsSuccess = (products) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsStart());
        await instance.get('/api/products')
            .then((response) => {
                dispatch(fetchProductsSuccess(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error));
            });
    };
};
