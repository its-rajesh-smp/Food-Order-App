import React, { useContext } from 'react';
import "./Offer.css"
import OfferPromoCTX from '../../../Context/OfferPromoData/OfferPromoCtx';

function Offer(props) {

    const applyOfferCTX = useContext(OfferPromoCTX)


    // Function To Send Data On Click
    const applyOfferCTXOnClick = () => {
        applyOfferCTX.setOfferFUNC({ offerName: props.offerName, offerCode: props.offerCode, discount: props.discount })

    }


    return (
        <div className={`Offer-div`} onClick={applyOfferCTXOnClick}>
            <p className='promo'>{props.offerName}</p>
            <p>Promo Code: <span>{props.offerCode}</span></p>
        </div>
    );
}

export default Offer;
