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

export const adminProductDeleteReducer=(state={},action)=>{
    switch (action.type) {
        case 'PRODUCT_DELETE_REQUEST':
            return { loading: true }
        case 'PRODUCT_DELETE_SUCCESS':
            return { loading: false, success: action.payload }
        case 'PRODUCT_DELETE_FAIL':
            return { loading: false, error: action.payload }
        // case 'PRODUCT_DELETE_RESET':
        //     return {}
        default:
            return state
    }
}
export const adminProductEditReducer=(state={},action)=>{
    switch (action.type) {
        case 'PRODUCT_EDIT_REQUEST':
            return { loading: true }
        case 'PRODUCT_EDIT_SUCCESS':
            return { loading: false, success: action.payload }
        case 'PRODUCT_EDIT_FAIL':
            return { loading: false, error: action.payload }
        case 'PRODUCT_EDIT_RESET':
            return {}
        default:
            return state
    }
}