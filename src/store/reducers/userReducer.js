import {
  SET_USER_LOGGED_OUT,
  SET_USER_LOGIN_FAILURE,
  SET_USER_LOGIN_SUCCESS,
} from "../actions/userActions";

const initialState = {
  user: { name: "", email: "", role_id: "", token: "" },
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case SET_USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case SET_USER_LOGGED_OUT:
      return { ...state, user: {}, isLoading: false, error: null };

    default:
      return state;
  }
};
