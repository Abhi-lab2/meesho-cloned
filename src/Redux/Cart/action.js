import * as types from "./actionTypes";

export const addToCart = ( item ) => ({
  type: types.ADD_TO_CART,
  payload: {
      product: item
  }
});

export const changeCheckoutStage = (stage) => ({
  type: types.CHANGE_CHECKOUT_STAGE,
  payload: {
    stage,
  },
});

export const changeQty = ( id, qty ) => ({
  type: types.CHANGE_QTY,
  payload: {
      id: id,
      qty: qty
  }
});
export const removeFromCart = ( id ) => ({
  type: types.REMOVE_FROM_CART,
  payload: {
      id: id
  }
});