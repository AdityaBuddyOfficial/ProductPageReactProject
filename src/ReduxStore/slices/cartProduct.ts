import { createSlice } from "@reduxjs/toolkit";

const cartDataSlice = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    addCart: (state: any, action: any) => {
      console.log("🚀 ~ action:", action);
      state.push(action.payload);
    },
  },
});

export const { addCart } = cartDataSlice.actions;
export default cartDataSlice.reducer;
