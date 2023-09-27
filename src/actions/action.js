import {
  SET_PRODUCT,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  PRODUCT_COUNT,
  CLEAR_CART
} from "../actionTypes/actionTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

export const SelectProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = () => {
  return {
    type: PRODUCT_COUNT,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};