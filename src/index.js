// import React from "react";
// import { createRoot } from "react-dom/client";
// // import { Provider } from "react-redux";
// // import { store } from "./app/store";
// import App from "./App";
// import "./index.css";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   // <Provider store={store}>
//   <App />
//   // </Provider>
// );




import React from "react";
import { createRoot } from "react-dom";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
import "./index.css";
import App from "./App";

import store from "./reducer/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { Provider } from "react-redux";

export let persistor = persistStore(store);




const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
);

