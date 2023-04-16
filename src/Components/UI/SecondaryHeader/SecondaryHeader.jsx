import React, { useContext } from "react";
import "./SecondaryHeader.css";
// Context
import PageChangeCTX from "../../../Context/PageChange/PageChangeCTX";

function SecondaryHeader(props) {
  // Change Page To Product Page
  const changePageToProduct = useContext(PageChangeCTX);

  return (
    <div className="SecondaryHeader-div ">
      <div className="header">
        {props.icon}
        <h1 className="header_name">{props.name}</h1>
      </div>

      <div>
        <i
          onClick={changePageToProduct[props.onClick]}
          className="bx bx-x"
        ></i>
      </div>
    </div>
  );
}

export default SecondaryHeader;
