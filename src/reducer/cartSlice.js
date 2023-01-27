import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "products",
  initialState: {
    name: "",
    price: "",
    totalPrice: "",
    optionName: "",
    optionPrice: "",
  },
  reducers: {
    inCart: (state, action) => {
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.optionName = action.payload.optionName;
      state.optionPrice = action.payload.optionPrice;
      state.totalPrice = action.payload.totalPrice;
    },
    clearCart: (state, action) => {
      state.name = "";
      state.price = "";
      state.optionName = "";
      state.optionPrice = "";
      state.totalPrice = "";
    },
  },
});

export const { inCart, clearCart } = cartSlice.actions;
export default cartSlice;
