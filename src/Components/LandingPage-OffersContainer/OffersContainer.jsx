import React, { useEffect } from "react";
import "./OffersContainer.css";
import Offer from "../../Components/UI/Offer/Offer"
import { useDispatch, useSelector } from "react-redux";
import { showOffersFromServer } from "../../Actions/offerActions";


function OffersContainer(props) {

    console.log("%cOFFER CONTAINER RENDER", "color:blue");

    const dispatch = useDispatch()
    const myOffersList = useSelector(state => state.offerReducer.userOffers)


    useEffect(() => {
        dispatch(showOffersFromServer())
    }, [])



    return (
        <div className=" OffersContainer-div ">
            <h3>
                <i className="bx bxs-offer"></i>
                Offers For You
            </h3>

            <div className="my-offers-div">
                {
                    myOffersList.map((val) => {
                        return <Offer key={val.id} details={{
                            offerName: val.name,
                            id: val.id,
                            offerCode: val.offerCode,
                            discount: val.discount,
                            type: val.type

                        }} />
                    })

                }

            </div>
        </div>
    );
}

export default OffersContainer;
