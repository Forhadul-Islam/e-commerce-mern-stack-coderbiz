import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import paymentSuccessImage from '../images/payment-image/payment-success-image.svg';

const PaymentSuccess = () => {
    const history = useHistory();
    const handleDashboardRedirect = () =>{
        history.replace('/')
    }
    return <div className="payment-success">
            <img className="payment-success__image" src={paymentSuccessImage} alt="payment" />
            <div className="payment-success__content">
                <div className="payment-success__content--title">
                Congratulations! ⏳ <br />
                It seems you have completed your payment successfully! 
                </div>
                    <Button 
                        className="payment-success__content--button"
                        onClick={handleDashboardRedirect} 
                        variant="success"
                    >
                        Continue With Dashboard
                    </Button>
                
            </div>
    </div>
}


export default PaymentSuccess;