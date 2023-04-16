import React, { useContext, useState } from "react";
import "./Offer.css";
import { applyOfferInServerACT } from "../../../Actions/offerActions";
import { useDispatch } from "react-redux";

function Offer(props) {

  const dispatch = useDispatch()



  const [isApplied, setIsApplied] = useState(props.appliedOfferObj[props.details.offerName] !== undefined ? true : false)

  /* -------------------------------------------------------------------------- */
  /*                                 APPLY OFFER                                */
  /* -------------------------------------------------------------------------- */
  const applyOffer = () => {
    dispatch(applyOfferInServerACT(props.details)).then((val) => {
      if (val === "SUCCESS") {
        setIsApplied(true)
      }
      else {
        setIsApplied(false)
      }
    })
  }




  return (
    <div onClick={applyOffer} className={`Offer-div ${isApplied === true ? "AppliedOffer" : ""}`}>
      <p className="promo">{props.details.offerName}</p>

      {
        props.details.type === "discount" && <p>Promo Code: <span>{props.details.offerCode}</span></p>
      }

    </div>
  );
}

export default Offer;
