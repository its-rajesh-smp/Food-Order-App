import React, { useContext, useEffect, useState } from "react";
import CartOpenCloseCTX from "../CartOpenClose/CartOpenCloseContext"

// CONTEXT
const OfferPromoCTX = React.createContext({
    getClickedOfferDetails: () => { },
    changeOrRemoveOffer: () => { }
});

// PROVIDER
const OfferPromoProvider = (props) => {

    // Run when screen change
    const updateOnRender = useContext(CartOpenCloseCTX)

    // State to Set applied Offer 
    const [appliedOffer, setAppliedOffer] = useState()

    // State to add remove alert confirm card
    const [alertConfirm, setAlertConfirm] = useState(false)

    /* -------------------------------------------------------------------------- */
    /*                    GET APPLIED OFFER FROM LOCAL STORAGE                    */
    /* -------------------------------------------------------------------------- */

    useEffect(() => {
        // Getting the applied offer
        const localAppliedOffer = JSON.parse(localStorage.getItem("APPLIED_OFFER"))
        if (localAppliedOffer !== null) {
            // send to another components
            setAppliedOffer(localAppliedOffer)
        }
        else {
            setAppliedOffer()
        }
    }, [updateOnRender.openCartPage_BOOL, alertConfirm])



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
            let confirm = window.confirm("Offer Can Be Applied Only Order On More Then 200 \n Please Confirm To Proceed")

            if (confirm === true) {
                localStorage.setItem("APPLIED_OFFER", JSON.stringify(newLocalData))
                setAppliedOffer(newLocalData)
                alert(`Offer Added 👍 \nOfferName ➡️ ${offerName} \nDiscount ➡️ ${offerDiscount} \nCode ➡️ ${offerCode}`);
            }

        }
        else {
            // Restrict the user to update once again if a offer is already applied
            // Open Confirm Alert Card
            setAlertConfirm(true)
        }
    }





    return (
        <OfferPromoCTX.Provider value={{ getClickedOfferDetails, appliedOffer, alertConfirm, setAlertConfirm }}>
            {props.children}
        </OfferPromoCTX.Provider>
    );
};

export default OfferPromoCTX;
export { OfferPromoProvider };
