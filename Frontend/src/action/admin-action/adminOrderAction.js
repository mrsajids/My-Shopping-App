import axios from 'axios'

export const fetchOrders = () => async (dispatch,getState) => {
    try {
        dispatch({ type: 'ORDER_FETCH_REQUEST' })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${userInfo.token}`
            },
        };
        const {data} = await axios.get(
            `/api/admin/order/getorders`,
            config
        );
        dispatch({
            type: 'ORDER_FETCH_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ORDER_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                   ? error.response.data.message
                    : error.message,
        });
    }
}

export const updateOrder=(id,orderStatus)=>async(dispatch,getState)=>{
    try {
        dispatch({ type: 'ORDER_UPDATE_REQUEST' })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${userInfo.token}`
            },
        };
        const {data} = await axios.put(
            `/api/admin/order/${id}`,{orderStatus:orderStatus},config  
        );
        dispatch({
            type: 'ORDER_UPDATE_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ORDER_UPDATE_FAIL',
            payload:
                error.response && error.response.data.message
                   ? error.response.data.message
                    : error.message,
        });
    }

}