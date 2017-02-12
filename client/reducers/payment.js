
function payment(state = {}, action) {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default payment;
