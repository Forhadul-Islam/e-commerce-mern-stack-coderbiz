import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserAction } from '../redux/actions/userActions';

const CheckUser = () => {
    const {checkUser} = useSelector(state => state.userReducer);
    const dispatch = useDispatch()
    const token = localStorage.getItem('JWT_TOKEN')
    useEffect(()=>{
        if(checkUser){
            dispatch(checkUserAction(token))
        }
    }, [checkUser, dispatch])
    return  <div />
}

export default CheckUser
