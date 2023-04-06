import React, { useContext } from 'react';
import "./Offers.css"
import OfferPromoCTX from '../../../Context/OfferPromoData/OfferPromoCtx';

function Offers(props) {

    const applyOfferCTX = useContext(OfferPromoCTX)


    // Function To Send Data On Click
    const applyOfferCTXOnClick = () => {
        applyOfferCTX.setOfferFUNC({ offerName: props.offerName, offerCode: props.offerCode, discount: props.discount })

    }


    return (
        <div className={`Offers-div`} onClick={applyOfferCTXOnClick}>
            <p className='promo'>{props.offerName}</p>
            <p>Promo Code: <span>{props.offerCode}</span></p>
        </div>
    );
}

export default Offers;
