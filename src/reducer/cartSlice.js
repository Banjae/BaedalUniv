import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "products",
  initialState: {
    name: "",
    price: "",
    optionCateName: "",
    optionName: "",
    optionPrice: "",
    discountPrice: "",
    totalPrice: "",
  },
  reducers: {
    inCart: (state, action) => {
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.optionCateName = action.payload.optionCateName;
      state.optionName = action.payload.optionName;
      state.optionPrice = action.payload.optionPrice;
      state.discountPrice = action.payload.discountPrice;
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
