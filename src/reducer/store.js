import { configureStore, createSlice } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
});
let players = createSlice({
  name: "players",
  initialState: [],
});
