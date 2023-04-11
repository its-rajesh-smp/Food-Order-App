import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
// Contexts
import { PageChangeProvider } from "./Context/PageChange/PageChangeCTX"
import { SendDataProvier } from "./Context/SendData/SendDataCTX";
import { UpdateTotalProvider } from "./Context/UpdateTotal/UpdateTotalCTX";
import { GetDataFromLocalProvider } from "./Context/GetDataFromLocal/GetDataFromLocal";
ReactDOM.render(

  <PageChangeProvider>
    <SendDataProvier>
      <GetDataFromLocalProvider>

        <UpdateTotalProvider>
          <App />
        </UpdateTotalProvider>

      </GetDataFromLocalProvider>
    </SendDataProvier>
  </PageChangeProvider>
  ,
  document.querySelector("#root")
);
