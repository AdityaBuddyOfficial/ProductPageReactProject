import { configureStore } from "@reduxjs/toolkit";
import productPageReducer from "./slices/productPage";
import cartDataSlice from "./slices/cartProduct";

export const store = configureStore({
  reducer: {
    productPageData: productPageReducer,
    cartData: cartDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
