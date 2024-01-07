export const adminProductAddReducer=(state={success:null},action)=>{
    switch (action.type) {
        case 'PRODUCT_ADD_REQUEST':
            return { loading: true }
        case 'PRODUCT_ADD_SUCCESS':
            return { loading: false, success: action.payload }
        case 'PRODUCT_ADD_FAIL':
            return { loading: false, error: action.payload }
        case 'PRODUCT_ADD_RESET':
            return {}
        default:
            return state
    }
}