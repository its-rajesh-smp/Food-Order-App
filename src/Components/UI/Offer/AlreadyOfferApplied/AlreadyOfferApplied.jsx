import React from "react";
import ReactDOM from "react-dom";
import "./AlreadyOfferApplied.css";

function AlreadyOfferApplied(props) {
  /* -------------------------------------------------------------------------- */
  /*                                REMOVE OFFER                                */
  /* -------------------------------------------------------------------------- */

  return ReactDOM.createPortal(
    <div className="blur">
      <div className="modal">
        <h1>Already Offer Present</h1>
        <h2>{props.name}</h2>
        <div className="modal_div_btn">
          <button>Close</button>
          <button>Remove</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default AlreadyOfferApplied;
