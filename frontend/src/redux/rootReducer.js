import { combineReducers } from 'redux';
import adminReducer from './reducers/adminReducer';
import alertReducer from './reducers/alertReducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
    userReducer,
    alertReducer,
    cartReducer,
    productReducer,
    adminReducer
})


export default rootReducer;