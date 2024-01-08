
//get orders
export const adminOrderFetchReducer=(state={orders:[]},action)=>{
    switch (action.type) {
        case 'ORDER_FETCH_REQUEST':
            return { loading: true }
        case 'ORDER_FETCH_SUCCESS':
            return { loading: false, orders: action.payload }
        case 'ORDER_FETCH_FAIL':
            return { loading: false, error: action.payload }
        // case 'ORDER_FETCH_RESET':
        //     return {}
        default:
            return state
    }
}

export const adminOrderUpdateReducer=(state={},action)=>{
    switch (action.type) {
        case 'ORDER_UPDATE_REQUEST':
            return { loading: true }
        case 'ORDER_UPDATE_SUCCESS':
            return { loading: false, success: action.payload }
        case 'ORDER_UPDATE_FAIL':
            return { loading: false, error: action.payload }
        // case 'ORDER_UPDATE_RESET':
        //     return {}
        default:
            return state
    }  
}