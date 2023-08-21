import { typesOfProducts } from '../../types/types'
import { instance } from '../../../components/assets/axiosUrl'
const { GET_PRODUCT } = typesOfProducts
const actionGetProductById = (data) => (
    {
        type: GET_PRODUCT,
        payload: data
    }
)

export const getProductById = (id) => async (dispatch) => {
    const res = await instance.get(`/api/products/${id}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(actionGetProductById(data))
    }
}

const initialState = { product: {} }
const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
            return { ...state, product: payload }
        default:
            return state
    }
}
export default productReducer