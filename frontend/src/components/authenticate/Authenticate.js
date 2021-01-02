import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../images/logo-white.png';
import AuthenticationForm from './AuthenticationForm';

const Authenticate = (props) => {
    // const history = useHistory() 
    const toHome = () =>{
        props.history.push('/')
    }   
    const [formOptions, setFormOptions] = useState('login')
  

    const handleOptions = (e) =>{
        setFormOptions(e.target.id)
    }

    let loginClass = formOptions === 'login' ? 
    'authenticate__options--active authenticate__options--login' 
    : 'authenticate__options--login'
    let signupClass = formOptions === 'signup' ? 
    'authenticate__options--active  authenticate__options--login' 
    : 'authenticate__options--login'
    return (
        <div className="authenticate">
            <div className="authenticate__image" />
            <div className="authenticate__container">
                <img 
                    className="authenticate__container--logo" 
                    src={logo} 
                    alt="coderBiz" 
                    onClick={()=>toHome()}
                />
                <div className="authenticate__options">
                    <div id="login" className={loginClass} onClick={(e)=>handleOptions(e)}>Login</div>
                    <div id="signup" className={signupClass} onClick={(e)=>handleOptions(e)}>Signup</div>
                </div>
                <AuthenticationForm formOptions={formOptions} />
            </div>                
            
        </div>
    )
}

export default withRouter(Authenticate) 
