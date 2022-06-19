import { legacy_createStore as createStore } from "redux";

import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./Cart/reducer";
import { productReducer } from "./Product/reducer";


const rootReducer = combineReducers({
  cartData: cartReducer,
  ecommerceData : productReducer
  // authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
