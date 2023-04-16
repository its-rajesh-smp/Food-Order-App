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
        case "REMOVE_APPLIED_OFFER": {
            const newAppliedOffer = state.appliedOffer.filter((val) => {
                if (val.id !== action.payload.id) {
                    return val
                }
            })
            state.appliedOffer = newAppliedOffer
            console.log(state);
            return state
        }
        default: return state
    }
}