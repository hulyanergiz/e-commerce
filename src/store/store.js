import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { storeReducer } from "./reducers/storeReducer";
import { userReducer } from "./reducers/userReducer";
import { orderReducer } from "./reducers/orderReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  store: storeReducer,
  user: userReducer,
  order: orderReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
