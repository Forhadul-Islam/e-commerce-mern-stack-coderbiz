import { v4 as uuidv4 } from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from '../types';

export const setAlert = (str, timeout =7000)=> dispatch => {
    const newId = uuidv4();
    dispatch({type: SET_ALERT, payload:{
        id: newId, msg: str
    } })
    setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: {id: newId}}), timeout)
}

export const removeAlert = (id)=> dispatch=>{
    dispatch({type: REMOVE_ALERT, payload: id})
}



