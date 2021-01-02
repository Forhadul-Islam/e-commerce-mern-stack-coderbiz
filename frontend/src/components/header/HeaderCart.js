import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';


const HeaderCart = ({history}) => {
    const {cart} = useSelector(state => state.cartReducer)
    const goToCart = () =>{
        history.push('/cart')
    }
    return (
        <>
             <div  className="header__right--basket">
            <AiOutlineShoppingCart onClick={goToCart} className="header__right--basket-icon" /> <span className="header__right--basket-count">{cart.length>0 && cart.length}</span>
            </div>
        </>
    )
}

export default withRouter(HeaderCart)
