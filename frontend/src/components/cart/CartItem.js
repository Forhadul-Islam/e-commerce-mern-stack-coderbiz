import React from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';





const CartItem = () =>{
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cartReducer);
    const removeCartItem = (item) =>{
        dispatch(removeFromCart(cart, item))
    }
    return (
        <>
            {
                cart.length > 0 &&
                cart?.map((el, i) =>(
                    <div key={i} className="cart__container--body-item">
                        <div className="cart__container--body-item--left">
                            <div className="cart__container--body-item--left-title">
                                {el.title}
                            </div>
                            <div className="cart__container--body-item--left-author">
                               <strong>Instructor: </strong> Mizanur Rahaman
                            </div>
                            
                        </div>
                        {
                            el.sale
                            ? <div className="cart__container--body-item--middle">
                                    {(el.price - el.price * el.sale).toFixed(2)}
                                </div>
                            : <div className="cart__container--body-item--middle">
                                    {el.price}
                                </div>
                            }
                        <div className="cart__container--body-item--right">
                            <IoMdRemoveCircleOutline
                            onClick={()=>{removeCartItem(el)}}
                            className="cart__container--bottom-remove-icon" />
                        </div>
                    </div>
                ))
            }
        </>
    )
}


export default CartItem;