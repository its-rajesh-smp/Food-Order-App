import React from "react";
import "./OffersForYou.css";
import Offers from "./Offers/Offers";


function OffersForYou(props) {




    return (
        <div className=" OffersForYou-div ">
            <h3>
                <i className="bx bxs-offer"></i>
                Offers For You
            </h3>

            <div className="my-offers-div">

                <Offers offerName="Flat50" offerCode="sharpener50" discount={50} />
                <Offers offerName="Flat10" offerCode="kolkataLocal10" discount={10} />

            </div>
        </div>
    );
}

export default OffersForYou;
