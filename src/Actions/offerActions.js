import axios from "axios"

const showOffers = (offerList) => {
    return { type: "SHOW_OFFERS", payload: offerList }
}
const applyOffer = (data) => {
    return { type: "APPLY_OFFER", payload: data }
}



export const showOffersFromServer = () => {
    return async (dispatch, setState) => {
        const { data } = await axios.get("http://localhost:3000/userOffers")
        dispatch(showOffers(data))
    }
}




// Apply Offer In Server
export const applyOfferInServerACT = (clickedOffer) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post("http://localhost:3000/cartTotal")
        } catch (e) {
            console.log(e);
        }
    }
}