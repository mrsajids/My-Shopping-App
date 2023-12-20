import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productListReducer } from './reducer/productReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}
const reducer = combineReducers({
    productList: productListReducer
})
// const middleware = [thunk]

const store = createStore(
    reducer,
    initialState
)

export default store