import React, { useContext } from "react";
import "./OrderSuccessPage.css";
import PageChangeCTX from "../../Context/PageChange/PageChangeCTX";

function OrderSuccessPage(props) {
  const takeToProduct = useContext(PageChangeCTX);

  localStorage.removeItem("LOCAL_CART_DATA");
  localStorage.removeItem("TOTAL_VALUE");
  localStorage.removeItem("APPLIED_OFFER");

  setTimeout(function () {
    takeToProduct.goToProductPage();
  }, 3000);

  return (
    <div className=" OrderSuccessPage-div ">
      <h1>Order Successfull</h1>
      <p>Order details will send to your mobile..</p>
    </div>
  );
}

export default OrderSuccessPage;
