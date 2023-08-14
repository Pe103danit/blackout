import { typesOfProducts } from '../../types/types'
const { GET_PRODUCT } = typesOfProducts
const actionGetProductById = (data) => (
    {
        type: GET_PRODUCT,
        payload: data
    }
)
export const getProductById = (id) => async (dispatch) => {
    const res = await fetch(`/api/products/${id}`)
    console.log(res)
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