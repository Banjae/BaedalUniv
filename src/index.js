import React from "react";

import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from "./reducers/store";
import { persistStore } from "redux-persist";
import store from "./reducer/store";

import "./index.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
export let persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
