import Axios from "axios";
import * as types from "./actionTypes";

const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload: payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload: payload,
  };
};

const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload: payload,
  };
};

export const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());

  Axios.post(`http://localhost:3001/cart`, product)
    .then((r) => dispatch(addProductCartSuccess(r.data)))
    .catch((e) => dispatch(addProductCartFailure(e.data)));
};

const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_REQUEST,
    payload: payload,
  };
};
const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload: payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload: payload,
  };
};

export const fetchCart = () => (dispatch) => {
  dispatch(fetchCartRequest());

  Axios.get("/cart")
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};

const deleteProductCartRequest = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_REQUEST,
    payload: payload,
  };
};
const deleteProductCartSuccess = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_SUCCESS,
    payload: payload,
  };
};

const deleteProductCartFailure = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_FAILURE,
    payload: payload,
  };
};

export const deleteProductCart = (id) => (dispatch) => {
  dispatch(deleteProductCartRequest());

  Axios.delete(`/cart/${id}`)
    .then((r) => dispatch(deleteProductCartSuccess(r.data)))
    .then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(deleteProductCartFailure(e.data)));
};

const fetchOrdersRequest = (payload) => {
  return {
    type: types.FETCH_ORDERS_REQUEST,
    payload,
  };
};

const fetchOrdersSuccess = (payload) => {
  return {
    type: types.FETCH_ORDERS_SUCCESS,
    payload,
  };
};

const fetchOrdersFailure = (payload) => {
  return {
    type: types.FETCH_ORDERS_FAILURE,
    payload: payload,
  };
};

export const fetchOrders = (payload) => (dispatch) => {
  dispatch(fetchOrdersRequest());

  Axios.get("/orders")
    .then((r) => dispatch(fetchOrdersSuccess(r.data)))
    .catch((e) => dispatch(fetchOrdersFailure(e.data)));
};
