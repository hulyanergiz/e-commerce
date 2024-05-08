import {
  SELECT_ADDRESS,
} from "../actions/orderActions";
const initialState = { cart: [], address: [], card: {} };
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ADDRESS:
      return {
        ...state,
        address: [state.address, action.payload],
      };
    default:
      return state;
  }
};
