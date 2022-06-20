import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product-slice/products.slice";
import cartReducer from "./cart-slice/cart.slice";
import couponReducer from "./coupon-slice/coupon.slice";

import { createEpicMiddleware } from "redux-observable";

import { combinedEpics } from "./epics";

const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    coupon: couponReducer,
  },
  middleware: () => [...middlewares],
});

epicMiddleware.run(combinedEpics);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
