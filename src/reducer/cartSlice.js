import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ciSeq: "",
  stdSeq: "",
  fmiSeq: "",
  fdoSeqList: [],
  count: "",
  ciName: "",
  bmocSeq: "",
  siName: "",
  closeTime: "",
  deliveryTime: "",
  menuName: "",
  optionAll: "",
  price: "",
  totalPrice: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    cartAdd: (state, action) => {
      state.ciSeq = action.payload.ciSeq;
      state.stdSeq = action.payload.stdSeq;
      state.fmiSeq = action.payload.fmiSeq;
      state.fdoSeqList = action.payload.fdoSeqList;
      state.count = action.payload.count;
    },
    cartDelet: (state, action) => {
      state.ciSeq = "";
      state.stdSeq = "";
      state.fmiSeq = "";
      state.fdoSeqList = [];
      state.count = "";
    },
    cartLookup: (state, action) => {
      state.ciName = action.payload.ciName;
      state.bmocSeq = action.payload.bmocSeq;
      state.siName = action.payload.siName;
      state.closeTime = action.payload.closeTime;
      state.deliveryTime = action.payload.deliveryTime;
      state.menuName = action.payload.menuName;
      state.optionAll = action.payload.optionAll;
      state.price = action.payload.price;
      state.count = action.payload.count;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { cartAdd, cartDelet, cartLookup } = cartSlice.actions;
export default cartSlice;
