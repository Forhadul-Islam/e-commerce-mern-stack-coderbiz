import API from '../../util/API';
import { LOAD_ALL_USERS } from '../types';


const options = {header: {'Content-Type': 'application/json'}}
export const loadAllUsers = () => async (dispatch) =>{
    try {
        const url = '/users';
        const users = await API.get(url, options);
        dispatch({type: LOAD_ALL_USERS, payload : users.data})
    } catch (err) {
        console.log(err)
    }
} 