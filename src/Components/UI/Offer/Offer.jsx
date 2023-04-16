import React, { useContext, useState } from "react";
import "./Offer.css";
import { applyOfferInServerACT, removeApplyOfferInServerACT } from "../../../Actions/offerActions";
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

  /* -------------------------------------------------------------------------- */
  /*                            REMOVE APPLIED OFFER                            */
  /* -------------------------------------------------------------------------- */
  const removeApplied = () => {
    dispatch(removeApplyOfferInServerACT(props.details)).then((val) => {
      if (val === "SUCCESS") {
        setIsApplied(false)
      }
    })
  }




  return (
    <div onClick={isApplied === false ? applyOffer : null} className={`Offer-div ${isApplied === true ? "AppliedOffer" : ""}`}>
      <p className="promo">{props.details.offerName} {isApplied === true && <span onClick={removeApplied} ><i className='bx bxs-message-square-x removeApplied'></i></span>} </p>

      {
        props.details.type === "discount" && <p>Promo Code: <span className="offerCode">{props.details.offerCode}</span></p>
      }

    </div>
  );
}

export default Offer;
