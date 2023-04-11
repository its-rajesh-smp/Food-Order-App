import React, { useContext, useEffect, useState } from "react";
import "./Offer.css";
import ApplyOfferCTX from "../../../Context/ApplyOffer/ApplyOfferCTX";

function Offer(props) {
  const sendClickdOffer = useContext(ApplyOfferCTX);

  const [applied, setApplied] = useState("");
  /* -------------------------------------------------------------------------- */
  /*                       FUNCTION TO SEND CLICKED OFFER                       */
  /* -------------------------------------------------------------------------- */
  const onClickSendOffer = (clickedOffer) => {
    if (JSON.parse(localStorage.getItem("APPLIED_OFFER")) !== null) {
      return;
    }
    sendClickdOffer.getAppliedOffer(clickedOffer);
    setApplied("AppliedOffer");
  };

  /* -------------------------------------------------------------------------- */
  /*                              GET APPLIED OFFER                             */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const appliedLocalOffer = JSON.parse(localStorage.getItem("APPLIED_OFFER"));
    if (appliedLocalOffer != null) {
      if (appliedLocalOffer.offerCode === props.offerCode) {
        setApplied("AppliedOffer");
      }
    }
  }, []);

  return (
    <div
      onClick={() => {
        onClickSendOffer(props);
      }}
      className={`Offer-div ${applied}`}
    >
      <p className="promo">{props.offerName}</p>
      <p>
        Promo Code: <span>{props.offerCode}</span>
      </p>
    </div>
  );
}

export default Offer;
