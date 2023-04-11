import React from "react";
import "./CartPage.css";

import DelivaryAddress from "../../Components/UI/CartSection/DelivaryAddress/DelivaryAddress";
import CartProductsContainer from "../../Components/CartSection-CartProductsContainer/CartProductsContainer";
import CartOffersAndCoupons from "../../Components/UI/CartSection/CartSection-OffersAndCoupons/CartOffersAndCoupons";
import BillDetails from "../../Components/UI/CartSection/CartSection-BillDetails/BillDetails";
import PlaceOrderBtn from "../../Components/UI/CartSection/CarSection-PlaceOrderButton/PlaceOrderBtn";
import SecondaryHeader from "../../Components/UI/CartSection/CartSection-SecondaryHeader/SecondaryHeader";

function CartPage(props) {
  return (
    <div className=" CartPage-div ">
      <SecondaryHeader />
      <DelivaryAddress />
      <CartProductsContainer />
      <CartOffersAndCoupons />
      <BillDetails />
      <PlaceOrderBtn />
    </div>
  );
}

export default CartPage;
