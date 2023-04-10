import React, { useContext, useEffect, useState } from 'react';
import "./Offer.css"
import OfferPromoCTX from '../../../Context/OfferPromoData/OfferPromoCtx';

function Offer(props) {

    const applyOfferCTX = useContext(OfferPromoCTX)

    // State to update the css
    const [isApplied, setApplied] = useState("")

    useEffect(() => {
        if (applyOfferCTX.appliedOffer !== undefined && applyOfferCTX.appliedOffer.code === props.offerCode) {
            // If offerCode and localstorage offer code is same then apply the applied property
            setApplied("AppliedOffer")
        }
        else {
            // Else remove it
            setApplied("")
        }
    }, [applyOfferCTX.appliedOffer, props.offerCode, applyOfferCTX.alertConfirm])


    /* -------------------------------------------------------------------------- */
    /*            Function To Send OfferData On Click to OfferPromoCtx            */
    /* -------------------------------------------------------------------------- */

    const applyOfferCTXOnClick = () => {
        // Send Data to OFferPromoCTX
        applyOfferCTX.getClickedOfferDetails(props)
    }


    // Only click is possible if isApplied is not added
    return (
        <div className={`Offer-div ${isApplied}`} onClick={applyOfferCTXOnClick}>
            <p className='promo'>{props.offerName}</p>
            <p>Promo Code: <span>{props.offerCode}</span></p>
        </div>
    );
}

export default Offer;
