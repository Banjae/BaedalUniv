import React from "react";

import { createRoot } from "react-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";

import "./index.css";

import App from "./App";

import store from "./reducer/store";

import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

