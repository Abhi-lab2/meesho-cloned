import * as types from "./actionTypes";

const initState = {
  products: [],
  error: "",
  currentProduct: {},
  cart: [],
  orders: [],
};

export const productReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: "",
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        error: "",
      };
    case types.FETCH_DATA_FAILIURE:
      return {
        ...state,
        error: payload,
      };
    case types.ADD_PRODUCT_CART_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, payload], //
        error: "",
        loading: false,
      };
    case types.ADD_PRODUCT_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.FETCH_CART_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: [...payload],
        error: "",
        loading: false,
      };
    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.REMOVE_PRODUCT_CART_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };

    case types.REMOVE_PRODUCT_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
