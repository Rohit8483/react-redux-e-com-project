import {
  SET_PRODUCT,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  PRODUCT_COUNT,
  CLEAR_CART
} from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};

export const setProductsreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
export const cartCount = (state = { cartCount: 0 }, { type, payload }) => {
  switch (type) {
    case PRODUCT_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case CLEAR_CART:
      return {
        cartCount: 0,
      };

    default:
      return state;
  }
};
