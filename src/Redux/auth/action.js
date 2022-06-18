// import Axios from "axios";

import * as types from "./actionTypes";

export const fetchDataRequest = (payload) => {
  return {
    type: types.SIGNIN_REQUEST,
    payload: payload,
  };
};

export const fetchDataSuccess = (payload) => {
  return {
    type: types.SIGNIN_SUCCESS,
    payload: payload,
  };
};

export const fetchDataFailure = (payload) => {
  return {
    type: types.SIGNIN_FAILURE,
    payload: payload,
  };
};

export const loginUser = (payload) => {
  return {
    type: types.LOGIN_USER,
    payload: payload,
  };
};

export const logOut = (payload) => {
  return {
    type: types.LOGOUT_USER,
    payload: payload,
  };
};
