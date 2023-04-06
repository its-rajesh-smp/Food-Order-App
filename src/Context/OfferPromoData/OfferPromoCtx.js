import React, { useEffect, useState } from "react";

const OfferPromoCTX = React.createContext();

const OfferPromoProvider = (props) => {
    // State for geting offerData
    const [setOffer, setOfferFUNC] = useState();


    // Update data in localStorage
    useEffect(() => {
        if (setOffer !== undefined) {
            if (localStorage.getItem("APPLIEDOFFER") === null) {
                localStorage.setItem("APPLIEDOFFER", JSON.stringify(setOffer));
            } else {
                alert("YOU ALREADY HAVE APPLIED AN OFFER");
            }
        }
    }, [setOffer]);

    return (
        <OfferPromoCTX.Provider value={{ setOfferFUNC }}>
            {props.children}
        </OfferPromoCTX.Provider>
    );
};

export default OfferPromoCTX;
export { OfferPromoProvider };
