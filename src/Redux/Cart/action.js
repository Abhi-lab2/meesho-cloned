import * as types from "./actionTypes";

export const changeCheckoutStage = (stage) => ({
  type: types.CHANGE_CHECKOUT_STAGE,
  payload: {
    stage,
  },
});
