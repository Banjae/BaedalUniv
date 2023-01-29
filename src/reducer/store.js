import { configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import cartSlice from "./cartSlice";

const reducers = combineReducers({
  user: cartSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["cart"],
};
const presistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: presistedReducer,
});
export default store;
