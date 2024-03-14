export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_ITEM_COUNT = "INCREASE_ITEM_COUNT";
export const DECREASE_ITEM_COUNT = "DECREASE_ITEM_COUNT";
export const CHECK_ITEM = "CHECK_ITEM";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (productID) => ({
  type: REMOVE_FROM_CART,
  payload: productID,
});
export const increaseItemCount = (productId) => ({
  type: INCREASE_ITEM_COUNT,
  payload: productId,
});
export const decreaseItemCount = (productId) => ({
  type: DECREASE_ITEM_COUNT,
  payload: productId,
});
export const checkItem = (productId) => ({
  type: CHECK_ITEM,
  payload: productId,
});
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
