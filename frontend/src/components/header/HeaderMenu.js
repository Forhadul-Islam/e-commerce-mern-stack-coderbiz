import React from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAction } from '../../redux/actions/userActions';
import HeaderCart from './HeaderCart';


const HeaderMenu = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userReducer);
    const history = useHistory();
    const logout = () =>{
        dispatch(logoutAction())
    }
    const navigateToUserDashboard = () =>{
        history.push('/my-account')
    }
    const navigateToAdminDashboard = () =>{
        history.push('/admin')
    }


    return (
        <div className="header-menu">
            <HeaderCart />
            <div className="header-menu__large">
               {
                    user?.clearance === 'admin' && 
                    <div 
                    onClick={navigateToAdminDashboard}
                    className="header-menu__large--item"
                    >
                        Dashboard
                    </div>
               }
               {
                    user?.clearance === 'user' && 
                    <div onClick={navigateToUserDashboard} className="header-menu__large--item">
                        My Account
                    </div>
               }
                {/* <div className="header-menu__large--item">
                    Courses
                </div> */}
                <div 
                onClick={()=>logout()} 
                className="
                header-menu__large--item 
                header-menu__large--item--logout
                ">
                    Logout
                </div>
            </div>
            
            <div className="header-menu__expand">
                <FaAlignJustify className="header-menu__expand-icon" />
                <div className="header-menu__expand-body">
                    <div onClick={navigateToUserDashboard} className="header-menu__expand-body--item">
                        My Account
                    </div>
                    <div className="header-menu__expand-body--item">
                        Courses
                    </div>
                    <div onClick={()=>logout()} 
                        className="header-menu__expand-body--item 
                        header-menu__expand-body--item--logout">
                        Logout
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderMenu
