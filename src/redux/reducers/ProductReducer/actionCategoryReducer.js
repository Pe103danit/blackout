// import { instance } from '../../../components/assets/axiosUrl';
import axios from 'axios';

export const GET_PORTABLE_POWER_STATION = 'GET_PORTABLE_POWER_STATION';
export const GET_POWER_BANKS = 'GET_POWER_BANKS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://blackoutstore-be-iota.vercel.app/api/products/');
            dispatch({
                type: GET_PORTABLE_POWER_STATION,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: FETCH_PRODUCTS_ERROR,
                error: error.message
            });
        }
    };
};
