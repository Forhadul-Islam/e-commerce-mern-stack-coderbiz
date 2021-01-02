import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../redux/actions/productActions';



const LoadProducts = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts())
    }, [])


    return <div />
}


export default LoadProducts;