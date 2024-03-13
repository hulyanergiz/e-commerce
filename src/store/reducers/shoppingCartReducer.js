import {
  ADD_TO_CART,
  DECREASE_ITEM_COUNT,
  INCREASE_ITEM_COUNT,
  REMOVE_FROM_CART,
  SET_ADDRESS,
  SET_PAYMENT,
} from "../actions/shoppingCartActions";

const initialState = { cart: [], payment: {}, address: {} };

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].count += 1;

        return { ...state, cart: updatedCart };
      } else {
        const stateAfterAdding = {
          ...state,
          cart: [...state.cart, { ...action.payload, count: 1 }],
        };
        return stateAfterAdding;
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case INCREASE_ITEM_COUNT:
      const increasedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: increasedCart,
      };

    case DECREASE_ITEM_COUNT:
      const decreasedCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
        .filter((item) => item.count > 0);

      return {
        ...state,
        cart: decreasedCart,
      };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
