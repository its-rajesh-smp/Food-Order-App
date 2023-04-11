import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
// Contexts
import { PageChangeProvider } from "./Context/PageChange/PageChangeCTX"
import { SendDataProvier } from "./Context/SendData/SendDataCTX";
import { UpdateTotalProvider } from "./Context/UpdateTotal/UpdateTotalCTX";
import { ApplyOfferProvider } from "./Context/ApplyOffer/ApplyOfferCTX";

ReactDOM.render(

  <PageChangeProvider>
    <SendDataProvier>
      <UpdateTotalProvider>
        <ApplyOfferProvider>
          <App />
        </ApplyOfferProvider>
      </UpdateTotalProvider>
    </SendDataProvier>
  </PageChangeProvider>
  ,
  document.querySelector("#root")
);
