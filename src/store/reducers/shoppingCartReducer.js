import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ADDRESS,
  SET_PAYMENT,
} from "../actions/shoppingCartActions";

const initialState = { cart: [], payment: {}, address: {} };

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
