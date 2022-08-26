import React , { useState } from 'react'
import './Sign.css'
import { CgShapeCircle } from 'react-icons/cg';
import { CgFacebook } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { CgLock } from 'react-icons/cg';

import { validPassword } from './RegEx.jsx';

const Signin = () => {

  //password regEx 
  const [password, setPassword] = useState('');
  const [pwdError, setPwdError] = useState(false);

  const validate = () => {
    if (!validPassword.test(password)) {
       setPwdError(true);
    }
 };
  
    // icon styling
  const facebook = {
    color: 'blue',
    cursor: 'pointer'
  }
  const google = {
    cursor: 'pointer'
  }
  const apple = {
    color: 'white',
    cursor: 'pointer'
  }
  const span = {
    marginRight: '5px',
    color:"#fff",
    textShadow: "0px 3px 3px #000"
  }

        // hide and show password
  const [isShown, setIsSHown] = useState(false);  
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);  
};
  
  return (
    <div className="mybody">
      <div className='container'>
      <div className='sign-in-container'>
        <div className='img'></div>
        <div className='step-two step'>
          <h1> <span style={span}>Sign in to</span> <span className='gym'> G</span>ym<span className='gym'>P</span>lex <CgShapeCircle className='gymicon'/> </h1>
          <div className='main'>
            <h3>Welcome back please Sign in to your account</h3>
            <div className='input'>
              
              <FaUser className='icn'/><input type="text" placeholder='Username'/>
              <CgLock className='icn'/>
              <input type={isShown ? "text" : "password"} placeholder='Password'   onChange={(e) => setPassword(e.target.value)}/>
              {pwdError && <p className='red-text'>Your password is invalid</p>}
              <div className="checkbox-container">
                 <label htmlFor="checkbox" className='checkboxlabel'>Show password? </label>
                 <input
                    className="checkbox"
                    type="checkbox"
                    checked={isShown}
                    onChange={togglePassword}
                 />
              </div>
            </div>
              <p className='forgot'>Forgot your password ? </p>
            <button className='btns' onClick={validate}>SIGN IN</button>

            <fieldset>
                <legend>
                  Or continue with 
                </legend>
            </fieldset>
            
            <div className='using'>
              <div className='media'><CgFacebook style={facebook} size={30} /> <FcGoogle style={google} size={30}/> <FaApple style={apple} size={30}/></div>
            </div>
            <div className='new'>
              <p>New to GymPlex? <span   style={facebook} >Sign Up</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Signin;