import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

import storageSession from "redux-persist/lib/storage/session";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  cart: cartSlice.reducer,
  user: userSlice.reducer,
});
const persistConfig = {
  key: "root",
  // storage,
  storage: storageSession,
  whitelist: ["user", "cart"],
};
const presistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  // reducer: {
  //   user: userSlice.reducer,
  // },
  reducer: presistedReducer,
  // 임시로  middleware
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
