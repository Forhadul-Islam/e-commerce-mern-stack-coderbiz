import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { singlePayment } from '../../redux/actions/stripeAcrions';



const StripePayment = () =>{
    const stripe = useStripe();
    const elements = useElements()
    const history = useHistory();

    const {cart, total} = useSelector(state => state.cartReducer);
    console.log(total)
    const {user} = useSelector(state => state.userReducer);
    const [cartName, setCartName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(user.email)
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('')
    const dispatch = useDispatch();



    const handleError = (message) =>{
        setError(message);
        setTimeout(() => {
            setError('')
        }, 3000);
    }


    const submitToken = async () =>{
        if(!stripe || !elements) return;
        let cardElement = elements.getElement(CardElement);
        try {
            const token = stripe.createToken(cardElement)
            return token;
        } catch (err) {
            console.log(err)
        }
    }

    
    const handleSubmitPayment = async (e) =>{
        e.preventDefault();
       
            const {token} =  await submitToken()
            console.log(token)
            if(!token){
                // dispatch(setAlert('payment cannot be submitted!'));
                handleError('Payment cannot be submitted! Please try again.')
                return;
            }
            setProcessing(true)
            dispatch(singlePayment(cart, total, token, cartName, phone, email, setProcessing, handleError, history))      
    }

    return <Fragment>
            <form className="payment__container--form">
                <div className="payment__container--form-grid-row">
                    <input 
                        className="payment__container--form-input"
                        type="text" 
                        name="cartName" 
                        value={cartName} 
                        placeholder="Your Cart Name"
                        onChange={(e)=>setCartName(e.target.value)}
                    />
                </div>
                <div className="payment__container--form-grid-row">
                    <input 
                        className="payment__container--form-input"
                        type="email" 
                        name="email" 
                        value={email}
                        placeholder="Your valid email address"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="payment__container--form-grid-row">
                    <input 
                        className="payment__container--form-input"
                        type="text" 
                        name="phone" 
                        value={phone}
                        placeholder="Your active phone number"
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>
                <div className="payment__container--form-grid-row" className="payment__container--form-stripe-cart">
                    <CardElement
                        options={{
                            style: {
                            base: {
                                fontSize: '18px',
                                color: '#4db7ec',
                                fontWidth: '600',
                                '::placeholder': {
                                color: '#fff',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                            },
                        }}
                    />
                </div>
                <div 
                className="payment__container--form-grid-row">
                    <Button  
                    onClick={(e)=>handleSubmitPayment(e)}
                    disabled={!stripe || !elements || !cartName.length || !email.length || !phone.length}
                    variant="info"
                    className="payment__container--form-button"
                    >
                        {processing? <i>Processing....</i> : <span>Pay ${total}</span>}
                    </Button>
                </div>
                <p className="payment__container--form-error">{error}</p>
                
                
            </form>
    </Fragment>
}

export default StripePayment;