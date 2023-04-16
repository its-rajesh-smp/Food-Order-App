import React, { useEffect } from "react";
import "./OffersContainer.css";
import Offer from "../../Components/UI/Offer/Offer"
import { useDispatch, useSelector } from "react-redux";
import { showOffersFromServer } from "../../Actions/offerActions";


function OffersContainer(props) {

    console.log("%cOFFER CONTAINER RENDER", "color:blue");

    const dispatch = useDispatch()
    const myOffers = useSelector(state => state.offerReducer)


    useEffect(() => {
        dispatch(showOffersFromServer())
    }, [])


    // create a object of applied offer to check in O|1| time
    const appliedOfferObj = {}

    myOffers.appliedOffer.forEach((val) => {
        appliedOfferObj[val.offerName] = val
    })





    return (
        <div className=" OffersContainer-div ">
            <h3>
                <i className="bx bxs-offer"></i>
                Offers For You
            </h3>

            <div className="my-offers-div">
                {
                    myOffers.userOffers.map((val) => {
                        return <Offer key={val.id} details={{
                            offerName: val.name,
                            id: val.id,
                            offerCode: val.offerCode,
                            discount: val.discount,
                            type: val.type

                        }}
                            appliedOfferObj={appliedOfferObj}
                        />
                    })

                }

            </div>
        </div>
    );
}

export default OffersContainer;
