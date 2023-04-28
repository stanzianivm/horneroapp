import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { HorneroApp } from "./HorneroApp";
import { store } from "./store";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HorneroApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
