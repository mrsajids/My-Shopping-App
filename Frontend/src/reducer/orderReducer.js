const {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL
} =require('../constants/orderConstant')

export const createOrderReducer=(state={},action)=>{
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {
                loading:true
            }
        case ORDER_CREATE_SUCCESS:
            return {
              ...state,
                loading:false,
                success:true,
                order:action.payload
            }
        case ORDER_CREATE_FAIL:
            return {
              ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}