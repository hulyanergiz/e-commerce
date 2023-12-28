import { SET_STORE } from "../actions/storeActions";

const initialState = { store: {} };

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return { ...state, store: action.payload };
    default:
      return state;
  }
};
