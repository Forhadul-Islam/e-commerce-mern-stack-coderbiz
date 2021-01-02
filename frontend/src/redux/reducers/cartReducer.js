import { COMPLETE_PAYMENT, UPDATE_CART } from '../types';

const INITIAL_STATE = {
    cart: [],
    total: 0
}


const cartReducer = (state = INITIAL_STATE, action ) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_CART:
            return {
                ...state,
                cart:[ ...payload.cart],
                total: payload.total
            }
        case COMPLETE_PAYMENT: 
            return INITIAL_STATE;
        default:
            return state;
    }
}



export default cartReducer;