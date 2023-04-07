import React from "react";
import "./OffersContainer.css";
import Offers from "./Offers/Offers";


function OffersContainer(props) {




    return (
        <div className=" OffersContainer-div ">
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

export default OffersContainer;