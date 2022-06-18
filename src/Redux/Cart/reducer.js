import { loadData, saveData } from "./localStorage";
import * as types from "./actionTypes";

const cart = loadData("Cart");
const orders = loadData("Orders") || [];
const address = loadData("Address") || [];

const initCart = {
  stage: 1,
  address: address,
  cart: cart || [],
  orders: orders,
  currentOrder: {},
  margin: 0,
};

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      let newItem = true;
      let newCart = state.cart.map((el) => {
        if (el.id === action.payload.product.id) {
          newItem = false;
          return { ...el, qty: el.qty + 1 };
        }
        return el;
      });

      if (newItem)
        newCart = [...state.cart, { ...action.payload.product, qty: 1 }];
      // let value = JSON.stringify(localStorage.setItem(key, value))
      return {
        ...state,
        cart: newCart,
      };
    }
    case types.CHANGE_CHECKOUT_STAGE: {
      saveData("Address", state.address);
      saveData("Cart", state.cart);
      return {
        ...state,
        stage: action.payload.stage,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
