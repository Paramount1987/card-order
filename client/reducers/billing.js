
function billing(state = {}, action) {
    switch (action.type) {
        case 'ADD_BILLING':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default billing;
