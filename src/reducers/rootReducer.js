import { combineReducers } from "redux";
import { setProductsreducer, selectedProductReducer,cartCount } from "./reducers";

export const rootreducer = combineReducers({
  allProducts: setProductsreducer,
  singleProduct: selectedProductReducer,
  count:cartCount
});
