import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAlert } from '../../redux/actions/alertActions';
import CartItem from './CartItem';



const Cart = () => {
    const {total, cart} = useSelector(state => state.cartReducer);
    const {user} = useSelector(state =>state.userReducer)
    const history = useHistory();
    const dispatch = useDispatch();
    
    //redirect user if not logged in

    const handleRedirectToCheckout = () =>{
        history.push('/checkout')
        if(!user.clearance){
            dispatch(setAlert('You must have to login first to proceed to checkout!'))
        }
    }
    

    
    return (
        <div className="cart">
            <div className="cart__title">Your Cart</div>
            <div className="cart__container">
                <div className="cart__container--body">
                   <CartItem />
                </div>
                <div className="cart__container--bottom">
                    <strong>Total: </strong> ${total}
                </div>
                <Button
                onClick={()=>{handleRedirectToCheckout()}}
                 disabled={!cart.length} variant="success" className="cart__container--bottom--purchase-btn">
                   Proceed to checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart
