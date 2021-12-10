import { createStore, combineReducers } from "redux";

import productsReducer from "./modules/products/reducers";
import cartReducer from "./modules/cart/reducers";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;
