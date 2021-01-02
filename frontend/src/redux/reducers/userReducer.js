import { CHECK_USER_FAILED, GET_USER, LOGOUT_USER } from '../types';

const INITIAL_STATE = {
    user: {
        clearance: '',
        email: '',
        token: ''

    },
    checkUser: true
}

const userReducer = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {
                ...state, 
                user: payload,
                checkUser: false
            }
        case LOGOUT_USER:
            return INITIAL_STATE;
        case CHECK_USER_FAILED: 
            return {
                ...state,
                checkUser: false
            }
        default: 
         return state
    }
}

export default userReducer;