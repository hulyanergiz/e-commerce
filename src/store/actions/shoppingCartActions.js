export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (productID) => ({
  type: REMOVE_FROM_CART,
  payload: productID,
});
export const setPayment = (payment) => ({ type: SET_PAYMENT, paylad: payment });
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
