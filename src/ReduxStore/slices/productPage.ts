import { createSlice } from "@reduxjs/toolkit";
import ProductCardData from "../../Api Data/Product/ProductCardData";

const productPage = createSlice({
  name: "products",
  initialState: ProductCardData,
  reducers: {},
});

export default productPage.reducer;
