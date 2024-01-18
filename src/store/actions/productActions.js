import { AxiosInstance } from "../../api/api";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setProductList = (filter, sort) => (dispatch) => {
  dispatch(setFetchState("fetching"));
  return AxiosInstance.get("/products", {
    params: { filter: filter, sort: sort },
  })
    .then((res) => {
      setTimeout(() => {
        dispatch(setFetchState("fetched"));

        dispatch({
          type: SET_PRODUCT_LIST,
          payload: res.data,
        });
      }, 1000);
    })
    .catch((err) => {
      console.log("products error", err);
      dispatch(setFetchState("fetch failed"));
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
