import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { store } from "./Store/store";
// Contexts
import { PageChangeProvider } from "./Context/PageChange/PageChangeCTX"
import { Provider } from "react-redux";

ReactDOM.render(

  <Provider store={store}>
    <PageChangeProvider>

      <App />

    </PageChangeProvider>
  </Provider>
  ,
  document.querySelector("#root")
);
