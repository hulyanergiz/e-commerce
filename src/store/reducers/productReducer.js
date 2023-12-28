import {
  SET_ACTIVE_PAGE,
  SET_FETCH_STATE,
  SET_PAGE_COUNT,
  SET_PRODUCT_LIST,
  SET_TOTAL_PRODUCT_COUNT,
} from "../actions/productActions";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL_PRODUCT_COUNT:
      return { ...state, totalProductCount: action.payload };
    case SET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    case SET_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};
