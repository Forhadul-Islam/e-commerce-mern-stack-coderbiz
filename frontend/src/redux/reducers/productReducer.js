import { LOAD_PRODUCTS, LOAD_SINGLE_PRODUCT } from "../types";


const INITIAL_STATE = {
    products: [],
    singleProduct: {},
    isLoading: true
}


const productReducer = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    switch (type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products : payload,
                isLoading: false
            }
        case LOAD_SINGLE_PRODUCT: 
            return {
                ...state,
                singleProduct: payload,
                isLoading: false
            }
    
        default:
            return state;
    }
}


export default productReducer;