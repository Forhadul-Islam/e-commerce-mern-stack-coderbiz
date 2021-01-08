import React from 'react';
import { useSelector } from 'react-redux';
import CheckUser from '../../util/CheckUser';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderMenu from './HeaderMenu';
import HeaderRight from './HeaderRight';


const Header = () => {
    const {user} = useSelector(state => state.userReducer);
    return (
        <>
        <CheckUser />
        <div className="header">
            <HeaderLeft />
            {/* <HeaderCenter /> */}

            {user.email ? <HeaderMenu /> : <HeaderRight />  }
            
           
        </div>
        </>
    );
};

export default Header;