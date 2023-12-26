import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { productDetailReducer, productListReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'
import { userLoginReducer, userRegisterReducer } from './reducer/userReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

const userInfoFromStorage = localStorage.getItem('userInfo') 
  ? JSON.parse(localStorage.getItem('userInfo')) 
  : undefined

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []


const initialState = {
  // cart: { cartItems: "techinfo" },
  cart: {
    cartItems: cartItemsFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage }
}
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})
const middleware = [thunk]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  initialState, composeEnhancer(applyMiddleware(...middleware))
)

export default store