import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { productDetailReducer, productListReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducer/userReducer'
import { createOrderReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from './reducer/orderReducer'
import { adminUserDeleteReducer, adminUserDetailsReducer } from './reducer/admin-reducer/adminUserReducer'
import { adminProductAddReducer, adminProductDeleteReducer, adminProductEditReducer } from './reducer/admin-reducer/adminProductReducer'
import { adminOrderFetchReducer, adminOrderUpdateReducer } from './reducer/admin-reducer/adminOrderReducer'

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : undefined

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}


const initialState = {
  // cart: { cartItems: "techinfo" },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  createOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  allUsers: adminUserDetailsReducer,
  deleteUser: adminUserDeleteReducer,
  productAdd: adminProductAddReducer,
  productDelete: adminProductDeleteReducer,
  productEdit: adminProductEditReducer,
  orderFetch: adminOrderFetchReducer,
  orderUpdate: adminOrderUpdateReducer
})

const middleware = [thunk]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  initialState, composeEnhancer(applyMiddleware(...middleware))
)

export default store