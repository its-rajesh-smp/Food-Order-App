import React, { useContext, useEffect, useState } from "react";
import CartOpenCloseCTX from "../CartOpenClose/CartOpenCloseContext"

// CONTEXT
const OfferPromoCTX = React.createContext({
    getClickedOfferDetails: () => { }
});

// PROVIDER
const OfferPromoProvider = (props) => {

    // Run when screen change
    const updateOnRender = useContext(CartOpenCloseCTX)

    const [appliedOffer, setAppliedOffer] = useState()

    /* -------------------------------------------------------------------------- */
    /*                    GET APPLIED OFFER FROM LOCAL STORAGE                    */
    /* -------------------------------------------------------------------------- */

    useEffect(() => {
        const localAppliedOffer = JSON.parse(localStorage.getItem("APPLIED_OFFER"))
        if (localAppliedOffer !== null) {
            setAppliedOffer(localAppliedOffer)
        }
    }, [updateOnRender.openCartPage_BOOL])



    /* -------------------------------------------------------------------------- */
    /*                          GET CLICKED OFFER DETAILS                         */
    /* -------------------------------------------------------------------------- */

    const getClickedOfferDetails = (clickedOfferData) => {
        const offerDiscount = clickedOfferData.discount
        const offerName = clickedOfferData.offerName
        const offerCode = clickedOfferData.offerCode

        // Form A object to upload in local Storage
        const newLocalData = { name: offerName, code: offerCode, discount: offerDiscount }

        // If nothing is present then upload it
        if (localStorage.getItem("APPLIED_OFFER") === null) {
            localStorage.setItem("APPLIED_OFFER", JSON.stringify(newLocalData))
        }
        else {
            // Restrict the user to update once again if a offer is applied
            alert("YOU HAVE ALREADY APPLIED AN OFFER")
        }
        setAppliedOffer(newLocalData)
    }



    return (
        <OfferPromoCTX.Provider value={{ getClickedOfferDetails, appliedOffer }}>
            {props.children}
        </OfferPromoCTX.Provider>
    );
};

export default OfferPromoCTX;
export { OfferPromoProvider };
