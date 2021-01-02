import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import Alert from '../components/alert/Alert';
import Authenticate from '../components/authenticate/Authenticate';
import CheckUser from '../util/CheckUser';

const Auth = () => {
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const {clearance} = useSelector(state => state.userReducer.user);
    if(clearance) return <Redirect to={from.pathname} />
    return (
        <>
        <CheckUser />
            <Alert />
            <Authenticate />
        </>
    )
}

export default Auth
