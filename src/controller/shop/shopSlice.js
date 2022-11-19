import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart: (state = initialState, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty = state.carts[itemIndex].qty + 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
    decCarts: (state = initialState, action) => {
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_desc].qty >= 1) {
        state.carts[itemIndex_desc].qty = state.carts[itemIndex_desc].qty - 1;
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        state.carts = data;
      }
    },
    delCarts: (state, action) => {
      const data = state.carts.filter((el) => el.id !== action.payload);
      state.carts = data;
    },
  },
});

export const { addCart, decCarts, delCarts } = shopSlice.actions;
export default shopSlice.reducer;
