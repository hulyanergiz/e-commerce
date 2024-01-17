import { AxiosInstance } from "../../api/api";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setProductList = (filter, sort) => (dispatch) => {
  return AxiosInstance.get("/products", {
    params: { filter: filter, sort: sort },
  })
    .then((res) => {
      dispatch({
        type: SET_PRODUCT_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("products error", err);
    });
};
export const setTotalProductCount = (totalProductCount) => ({
  type: SET_TOTAL_PRODUCT_COUNT,
  payload: totalProductCount,
});
export const setPageCount = (pageCount) => ({
  type: SET_PAGE_COUNT,
  payload: pageCount,
});
export const setActivePage = (activePage) => ({
  type: SET_ACTIVE_PAGE,
  payload: activePage,
});
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
