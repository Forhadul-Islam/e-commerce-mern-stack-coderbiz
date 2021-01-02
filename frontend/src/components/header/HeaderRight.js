import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderCart from './HeaderCart';

const HeaderRight = () => {
    const history = useHistory();
    const handleToLogin = () => {
        history.push('/auth')
    }
    return (
        <>
            <div className="header__right">
                <HeaderCart />
                <div onClick={handleToLogin} className="header__right--button-login">
                    Login
                </div>
            </div>
        </>
    )
}

export default HeaderRight
