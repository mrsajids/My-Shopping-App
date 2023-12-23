import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstant"
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`)  
        dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))  
    } catch (error) {
        console.error(error)
    }   
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    })
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  }