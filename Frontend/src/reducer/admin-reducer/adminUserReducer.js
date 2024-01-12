export const adminUserDetailsReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case 'USER_DETAILS_REQUEST':
            return { ...state, loading: true }
        case 'USER_DETAILS_SUCCESS':
            return { loading: false, user: action.payload }
        case 'USER_DETAILS_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_DETAILS_RESET':
            return { user: [] }
        default:
            return state
    }
}
export const adminUserDeleteReducer=(state={success:null},action)=>{
    switch (action.type) {
        case 'USER_DELETE_REQUEST':
            return { loading: true }
        case 'USER_DELETE_SUCCESS':
            return { loading: false, success: action.payload }
        case 'USER_DELETE_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}