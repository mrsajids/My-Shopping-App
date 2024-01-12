import axios from 'axios'

export const fetchUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: 'USER_DETAILS_REQUEST' })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${userInfo.token}`
            },
        };
        const { data } = await axios.get(
            `/api/admin/alluser`, config
        );
        dispatch({
            type: 'USER_DETAILS_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'USER_DETAILS_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'DELETE_USER_REQUEST' })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${userInfo.token}`
            },
        };
        const { data } = await axios.delete(
            `/api/admin/deleteuser/${id}`,config
        );
        dispatch({
            type: 'DELETE_USER_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'DELETE_USER_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}