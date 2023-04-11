import React, { useContext } from "react";
import "./SecondaryHeader.css";
// Context
import PageChangeCTX from "../../../../Context/PageChange/PageChangeCTX";

function SecondaryHeader() {
  // Change Page To Product Page
  const changePageToProduct = useContext(PageChangeCTX);

  return (
    <div className="SecondaryHeader-div ">
      <div className="header">
        <i className="bx bx-cart-alt"></i>
        <h1 className="header_name">Cart</h1>
      </div>

      <div>
        <i
          onClick={changePageToProduct.goToProductPage}
          className="bx bx-x"
        ></i>
      </div>
    </div>
  );
}

export default SecondaryHeader;
