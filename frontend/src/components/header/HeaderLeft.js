import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

function HomeLeft() {
    return (
            <Link to="/" className="header__left">
                <img className="header__left--image" src={logo} alt="logo" />
            </Link>
    )
}

export default HomeLeft;
