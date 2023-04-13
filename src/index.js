import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
// Contexts
import { PageChangeProvider } from "./Context/PageChange/PageChangeCTX"

ReactDOM.render(

  <PageChangeProvider>

    <App />

  </PageChangeProvider>
  ,
  document.querySelector("#root")
);
