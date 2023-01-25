import { configureStore } from "@reduxjs/toolkit";

import storageSession from "redux-persist/lib/storage/session";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";


import userSlice from "./userSlice";

const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
};
const presistedReducer = persistReducer(persistConfig, reducers);



const store = configureStore({
  reducer: presistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
