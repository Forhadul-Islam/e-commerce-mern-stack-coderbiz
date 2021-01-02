import API from '../../util/API';
import { setAlert } from '../actions/alertActions';
import { CHECK_USER_FAILED, GET_USER, LOGOUT_USER } from '../types';

const options = {headers: {'Content-Type': 'application/json'}}

export const signupAction = (username, phone, email, password) => async(dispatch) =>{
    const body ={
        username, 
        phone,
        email,
        password
    }
    const url = '/auth/signup'
    try{
        const res = await API.post(url, body, options);
        dispatch({type: GET_USER, payload: res.data.user})
    }catch(err){
        dispatch(setAlert(err.response.data.message))
        
    }
}


export const loginAction = (email, password) => async(dispatch) =>{
    const body ={
        email,
        password
    }
    const url = '/auth/login';
    try{
        const res = await API.post(url, body, options);
        localStorage.setItem('JWT_TOKEN',JSON.stringify (res.data.token));
        dispatch({type: GET_USER, payload: res.data.user});
    }catch(err) {
        dispatch(setAlert(err.response.data.message))
    }
}


export const logoutAction = () => async (dispatch)=>{
    const url = '/auth/logout';
    try{
        await API.get(url);
        localStorage.removeItem('JWT_TOKEN')
        dispatch({type: LOGOUT_USER})
    }catch(err){
        dispatch(setAlert(err.response.data.message))
    }
}



export const checkUserAction = (token) => async dispatch =>{
    try{
        const options = {headers: {'Content-Type': 'application/json', 'Authorization': `token ${token}`} }
        const url = `/auth/checkuser`;
        const res = await API.get(url, options);
        dispatch({type: GET_USER, payload: res.data.user[0]})
    }catch(err){
        dispatch({type: CHECK_USER_FAILED})
    }
}


export const updateUserAction = (body, id) => async dispatch =>{
    try {
        const url =`/users/${id}`;
        const response = await API.put(url, body, options)
        console.log(response)
    } catch (err) {
        console.log(err)
    }
} 