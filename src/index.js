import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
// Contexts
import { PageChangeProvider } from "./Context/PageChange/PageChangeCTX"
import { SendDataProvier } from "./Context/SendData/SendDataCTX";
import { UpdateTotalProvider } from "./Context/UpdateTotal/UpdateTotalCTX";
ReactDOM.render(

  <PageChangeProvider>
    <SendDataProvier>
      <UpdateTotalProvider>
        <App />
      </UpdateTotalProvider>
    </SendDataProvier>
  </PageChangeProvider>
  ,
  document.querySelector("#root")
);
