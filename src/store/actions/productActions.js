import { AxiosInstance } from "../../api/api";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const DEFAULT_PRODUCT_LIST = "DEFAULT_PRODUCT_LIST";

export const setProductList =
  (filter, sort, limit = 24, offset = 0) =>
  (dispatch) => {
    dispatch(setFetchState("fetching"));
    return AxiosInstance.get("/products", {
      params: { filter: filter, sort: sort, limit: limit, offset: offset },
    })
      .then((res) => {
        setTimeout(() => {
          dispatch(setFetchState("fetched"));
          dispatch(setTotalProductCount(res.data.total));
          dispatch({
            type: SET_PRODUCT_LIST,
            payload: res.data.products,
          });
          dispatch(setTotalProductCount(res.data.total));
          dispatch(setFetchState("fetched"));
        }, 1000);
      })
      .catch((err) => {
        console.log("products error", err);
        dispatch(setFetchState("fetch failed"));
      });
  };
export const defaultProductList = () => ({
  type: DEFAULT_PRODUCT_LIST,
});
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
