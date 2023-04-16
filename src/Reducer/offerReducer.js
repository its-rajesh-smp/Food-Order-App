const initialState = {
    userOffers: [],
    appliedOffer: []
}
export const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_OFFERS": {
            const newState = {
                ...action.payload
            }
            return newState
        }
        case "APPLY_OFFER": {
            state.appliedOffer.push(action.payload)
            return state
        }
        default: return state
    }
}