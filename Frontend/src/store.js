import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { productListReducer } from './reducer/productReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}
const reducer = combineReducers({
    productList: productListReducer
})
const middleware = [thunk]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    initialState, composeEnhancer(applyMiddleware(...middleware))
)

export default store