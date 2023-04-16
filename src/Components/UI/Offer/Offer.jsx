import React, { useContext } from "react";
import "./Offer.css";

function Offer(props) {

  return (
    <div className={`Offer-div`}>
      <p className="promo">{props.details.offerName}</p>

      {
        props.details.type === "discount" && <p>Promo Code: <span>{props.details.offerCode}</span></p>
      }

    </div>
  );
}

export default Offer;
