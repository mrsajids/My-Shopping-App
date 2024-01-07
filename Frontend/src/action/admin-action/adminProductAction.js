import axios from 'axios'
export const addProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_ADD_REQUEST' })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/admin/product/addproduct', product, config)
        dispatch({
            type: 'PRODUCT_ADD_SUCCESS',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'PRODUCT_ADD_FAIL',
            payload: error.response && error.response.data.message 
            ? error.response.data.message : error.message
        })
    }
}
export const resetProduct = () => async (dispatch) => {
    dispatch({type:'PRODUCT_ADD_RESET'})
}
