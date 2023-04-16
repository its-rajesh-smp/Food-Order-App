import axios from "axios"

const showOffers = (offerList) => {
    return { type: "SHOW_OFFERS", payload: offerList }
}
const applyOffer = (data) => {
    return { type: "APPLY_OFFER", payload: data }
}


// Show offers from server after component mount
export const showOffersFromServer = () => {
    return async (dispatch, setState) => {
        const userOffersResponse = await axios.get("http://localhost:3000/userOffers")
        const appliedOfferResponse = await axios.get("http://localhost:3000/appliedOffers")
        const newDataObj = {
            userOffers: userOffersResponse.data,
            appliedOffer: appliedOfferResponse.data
        }
        dispatch(showOffers(newDataObj))
    }
}




// Apply Offer In Server
export const applyOfferInServerACT = (clickedOffer) => {
    return async (dispatch, getState) => {
        try {
            const currentAppliedoffer = getState().offerReducer.appliedOffer


            let isApplied = false
            currentAppliedoffer.forEach(val => {
                if (val.type === clickedOffer.type) {
                    isApplied = true
                    return
                }
            });

            if (isApplied === false) {
                const { data } = await axios.post("http://localhost:3000/appliedOffers", clickedOffer)
                dispatch(applyOffer(data))
                return "SUCCESS"
            }
            else {
                return "NOT_SUCCESS"
            }

        } catch (e) {
            console.log(e);
        }
    }
}