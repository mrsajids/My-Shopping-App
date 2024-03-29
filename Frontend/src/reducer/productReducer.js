import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_RESET
} from '../constants/constants'

export const productListReducer = (state = { loading: true, product: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, product: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, product: action.payload }
        default:
            return state
    }
}

export const productDetailReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, payload: action.payload }
        case PRODUCT_DETAILS_RESET:
            return { product: { reviews: [] } }
        default:
            return state
    }
}