const initialState = {
    userOffers: []
}
export const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_OFFERS": {
            const newState = {
                userOffers: action.payload
            }
            return newState
        }
        default: return state
    }
}