import React from 'react';
import paymentImage from '../../images/payment-image/payment-5.svg';
import StripePayment from './StripePayment';

const Payment = () =>{
 

    return <div className="payment">
                <div className="payment__left">
                    <img 
                        className="payment__left--image" 
                        src={paymentImage} 
                        alt="stripe-payment" 
                    />
                </div>
                <div className="payment__container">
                    <div className="payment__container--title">
                        Create Your Payment
                    </div>
                    <StripePayment />
                </div>
            </div>
}


export default Payment;