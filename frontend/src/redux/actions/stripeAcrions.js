import API from '../../util/API';
import { COMPLETE_PAYMENT } from '../types';


export const singlePayment = (cart, total, token, cartName, phone, email, setProcessing, handleError, history) => async (dispatch) =>{
    try {      
                
        const options = {headers: {'Content-Type': 'application/json'}}
        const body = {
            username: cartName,
            phone,
            email,
            token,
            total,
            cart
        }
        const url = '/stripe/singlePayment';
        const res = await API.post(url, body, options);
        if(res.status === 200){
            setProcessing(false);
            localStorage.removeItem('cartPayload')
            dispatch({type: COMPLETE_PAYMENT})
            handleError('payment successful!')
            history.replace('/payment-success')
        }
        
    } catch (error) {
        console.log(error)
        handleError(error.response.data.message)
    }

}