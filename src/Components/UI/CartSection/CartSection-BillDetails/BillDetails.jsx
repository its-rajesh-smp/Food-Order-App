import React, { useContext, useEffect, useState } from "react";
import "./BillDetails.css";
import EmptyCart from "../Empty Cart/EmptyCart";

// Context To Update Total Data
import UpdateTotalCTX from "../../../../Context/UpdateTotal/UpdateTotalCTX";

function BillDetails() {
  const totalAmountCTX = useContext(UpdateTotalCTX);

  /* -------------------------------------------------------------------------- */
  /*                           GET LOCAL APPLIED OFFER                          */
  /* -------------------------------------------------------------------------- */
  const [localDiscount, setlocalDiscount] = useState(0);
  useEffect(() => {
    const localOffer = JSON.parse(localStorage.getItem("APPLIED_OFFER"));
    if (localOffer != null) {
      setlocalDiscount(localOffer.discount);
    }
  }, []);

  // Values
  const totalCTX = totalAmountCTX.totalValues.price;
  const tax = 25;
  const finalPrice = totalCTX >= 200 ? ((totalCTX - localDiscount) + tax) : (totalCTX + tax)

  // Show Bill Details if totalItem Amount > 0
  return totalCTX > 0 ? (
    <div className="BillDetails-div">
      <h3>Bill Details</h3>

      <div className="order">
        <p>Item total</p>
        <p>
          ₹<span>{totalCTX}</span>
        </p>
      </div>

      <div className="tax">
        <p>Delivery charges</p>
        <p>
          ₹<span>{tax}</span>
        </p>
      </div>

      <div className="offer">
        <p>Discount</p>
        <p>
          <span>{localDiscount !== 0 && totalCTX < 200 ? "Need ₹200 for discount" : "₹" + localDiscount}</span>
        </p>
      </div>

      <div className="total">
        <p>Bill total</p>
        <p className="totalAmount">
          ₹<span>{finalPrice}</span>
        </p>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
}

export default BillDetails;
