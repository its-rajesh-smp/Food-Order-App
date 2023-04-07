import React, { useEffect, useState } from "react";

const OfferPromoCTX = React.createContext();

const OfferPromoProvider = (props) => {


    return (
        <OfferPromoCTX.Provider value={{}}>
            {props.children}
        </OfferPromoCTX.Provider>
    );
};

export default OfferPromoCTX;
export { OfferPromoProvider };
