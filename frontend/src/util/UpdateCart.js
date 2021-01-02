import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_CART } from '../redux/types';

const UpdateCart = () => {
    const savedCart = localStorage.getItem('cartPayload');
    const payload = JSON.parse(savedCart);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(savedCart !== null){
            dispatch({type: UPDATE_CART, payload})
        }
       
    },[dispatch, payload])
    
    return <div />
}

export default UpdateCart
