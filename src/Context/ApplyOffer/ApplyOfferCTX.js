import React from 'react';

const ApplyOfferCTX = React.createContext();


const ApplyOfferProvider = (props) => {

    /* -------------------------------------------------------------------------- */
    /*                              GET APPLIED OFFER                             */
    /* -------------------------------------------------------------------------- */
    const getAppliedOffer = (clickedOffer) => {
        uploadToLocalStorage(clickedOffer)
    }

    /* -------------------------------------------------------------------------- */
    /*                    UPLOAD APPLIED OFFER IN LOCAL STORAGE                   */
    /* -------------------------------------------------------------------------- */
    function uploadToLocalStorage(clickedOffer) {
        localStorage.setItem("APPLIED_OFFER", JSON.stringify(clickedOffer))
    }


    return (
        <ApplyOfferCTX.Provider value={{ getAppliedOffer }}>
            {props.children}
        </ApplyOfferCTX.Provider>
    )
}


export default ApplyOfferCTX
export { ApplyOfferProvider }