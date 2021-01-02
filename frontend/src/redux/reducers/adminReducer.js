import { LOAD_ALL_USERS } from '../types';
const INITIAL_STATE = {
    users : [],
    isLoading: false
}


const adminReducer = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    switch (type) {
        case LOAD_ALL_USERS:
            return {
                ...state,
                users: payload
            }
            break;
    
        default:
            return state;
    }
}

export default adminReducer;