import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./controller/shop/shopSlice";

export const store = configureStore({
    reducer: {
      shop: shopReducer,
    },
  });
  