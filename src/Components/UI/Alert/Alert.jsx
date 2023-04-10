import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import "./Alert.css"
import OfferPromoCTX from '../../../Context/OfferPromoData/OfferPromoCtx';

function AlertConfirm(props) {
    const closeAlertConfirmCTX = useContext(OfferPromoCTX)

    /* -------------------------------------------------------------------------- */
    /*              Function to close this card on close button click             */
    /* -------------------------------------------------------------------------- */
    const colseCard = () => {
        closeAlertConfirmCTX.setAlertConfirm(false)
    }

    /* -------------------------------------------------------------------------- */
    /*                          Function to Remove Offer                          */
    /* -------------------------------------------------------------------------- */
    const removeOffer = () => {
        localStorage.removeItem("APPLIED_OFFER")
        alert("Applied Offer Removed")
        closeAlertConfirmCTX.setAlertConfirm(false)
    }


    return (
        ReactDOM.createPortal(
            <div className=' AlertConfirm-div-cover '>
                <div className='AlertConfirm-div'>

                    <h1>Alert</h1>
                    <p>An Offer is Already applied</p>

                    <div className='AlertConfirm-div-btn'>
                        <button onClick={colseCard}>Cancle</button>
                        <button onClick={removeOffer}>Remove</button>
                    </div>
                </div>
            </div>,
            document.querySelector("#alertConfirm")
        )
    );
}

export default AlertConfirm;
