import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import exportAllTogether from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={exportAllTogether.store}>
    <BrowserRouter>
      <PersistGate persistor={exportAllTogether.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
