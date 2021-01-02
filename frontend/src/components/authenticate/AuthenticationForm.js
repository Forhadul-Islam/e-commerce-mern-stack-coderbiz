import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction, signupAction } from '../../redux/actions/userActions';



const AuthenticationForm = ({formOptions}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch();

    //handle form Submit
    const handleLogin = async (e) =>{
        e.preventDefault();

        formOptions === 'signup' ? dispatch(signupAction(username, phone,email, password))
        : dispatch(loginAction(email, password))
      
    }
    useEffect(() => {
        AOS.init({duration: 1000})
    })
    return (
        < >
            {
                formOptions === 'signup' ?
                <form 
            onSubmit={(e)=>{handleLogin(e)}}
            data-aos="zoom-in" 
            className="authenticate__container--form">
                <input 
                    onChange = {(e)=>{setUsername(e.target.value)}}
                    type="text" 
                    name="username" 
                    value={username} 
                    placeholder="Enter you name" 
                />
                <input 
                    onChange = {(e)=>{setPhone(e.target.value)}}
                    type="number" 
                    name="phone" 
                    value={phone} 
                    placeholder="Enter you Phone number" 
                />
                <input 
                    onChange = {(e)=>{setEmail(e.target.value)}}
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="Enter you email" 
                />
                <input 
                    onChange = {(e)=>{setPassword(e.target.value)}}
                    type="password" 
                    name="password" 
                    value={password} 
                    placeholder="Enter you password" 
                />
                <button 
                className="authenticate__container--form-submit-button"
                
             >Submit</button>
            </form>
            : <form 
            onSubmit={(e)=>{handleLogin(e)}}
            data-aos="zoom-in" 
            className="authenticate__container--form">
                <input 
                    onChange = {(e)=>{setEmail(e.target.value)}}
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="Enter you email" 
                />
                <input 
                    onChange = {(e)=>{setPassword(e.target.value)}}
                    type="password" 
                    name="password" 
                    value={password} 
                    placeholder="Enter you password" 
                />
                <button 
                className="authenticate__container--form-submit-button"
                
             >Submit</button>
            </form>
            }
        </>
    )
}

export default AuthenticationForm
