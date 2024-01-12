import axios from 'axios'

export const addProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'PRODUCT_ADD_REQUEST' })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${userInfo.token}`
            },
        };
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
    dispatch({ type: 'PRODUCT_ADD_RESET' })
}
export const resetProductEdit = () => async (dispatch) => {
    dispatch({ type: 'PRODUCT_EDIT_RESET' })
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'PRODUCT_DELETE_REQUEST' })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${userInfo.token}`
            },
        };
        const { data } = await axios.delete(`/api/admin/product/deleteproduct/${id}`, config)
        dispatch({
            type: 'PRODUCT_DELETE_SUCCESS',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'PRODUCT_DELETE_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

export const editProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'PRODUCT_EDIT_REQUEST' })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${userInfo.token}`
            },
        };
        const { data } = await axios.put(`/api/admin/product/editproduct/${product.id}`, product, config)
        dispatch({
            type: 'PRODUCT_EDIT_SUCCESS',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'PRODUCT_EDIT_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}
