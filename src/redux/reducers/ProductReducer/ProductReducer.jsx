// import { typesOfProducts } from '../../types/types'
import { instance } from '../../../components/assets/axiosUrl'
// const { GET_PRODUCT } = typesOfProducts

const initialState = {
  wishList: localStorage.getItem('wishList') ? parseInt(localStorage.getItem('wishList')) : 0,
  basket: localStorage.getItem('basket') ? parseInt(localStorage.getItem('basket')) : 0,
  productItems: [],
  productIsLoading: true
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_START':
      return {
        ...state,
        productIsLoading: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        productItems: action.payload,
        productIsLoading: false,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        productIsLoading: false,
      };
    default:
      return state;
  }
}
// const actionGetProductById = (data) => (
//     {
//         type: GET_PRODUCT,
//         payload: data
//     }
// )
// const actionGetAllProducts = (data) => (
//     {
//         type: GET_ALL_PRODUCTS,
//         payload: data
//     }
// )
export const getAllProducts = () => async (dispatch) => {
  // const res = await fetch('/api/products')
  // console.log(res, 123123123)
  // if (res.ok) {
  //     const data = await res.json()
  //     console.log(data)
  //     dispatch(actionGetAllProducts(data))
  // }
  // try {
  //     const cacheBuster = new Date().getTime(); // Получаем текущее время в миллисекундах
  //     const url = `/api/products?cacheBuster=${cacheBuster}`;

  //     const res = await fetch(url);
  //     console.log(res, 4545)
  //     if (res.ok) {
  //         const data = await res.json();
  //         dispatch(actionGetAllProducts(data));
  //     } else {
  //         console.error('Ошибка при получении данных:', res.statusText);
  //     }
  // } catch (error) {
  //     console.error('Произошла ошибка:', error);
  // }
  const res = await instance.get('/api/products')
  console.log(res)
}

export const getProductById = (id) => async (dispatch) => {
  // const res = await fetch(`/api/products/${id}`)
  // if (res.ok) {
  //     const data = await res.json()
  //     dispatch(actionGetProductById(data))
  // }
  const res = await instance.get(`/api/products/${id}`)
  console.log(res)
}

export default productReducer