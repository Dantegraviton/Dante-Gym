import React, { useState } from 'react';
import { validEmail, validPassword } from './RegEx.jsx';
import './Sign.css'


import { CgShapeCircle } from 'react-icons/cg';
import { CgFacebook } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';







function SignUp() {

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
        color:"#555",
        textShadow: "0px 3px 3px #000"
      }


    //password regEx 
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailErr, setEmailErr] = useState(false);
const [pwdError, setPwdError] = useState(false);

const validate = () => {
   if (!validEmail.test(email)) {
      setEmailErr(true);
   }
   if (!validPassword.test(password)) {
      setPwdError(true);
   }
};

       // hide and show password
       const [isShown, setIsSHown] = useState(false);  
       const togglePassword = () => {
        setIsSHown((isShown) => !isShown);  
    };
    return (
        <div className="mybody">
            <div className='container '>
           <div className="sign-up-container">
                <div className='img2'></div>
                <div className='step'>
                    <h1 className='sign-head'> <span style={span}>Sign up to</span> <span className='gym'> G</span>ym<span className='gym'>P</span>lex <CgShapeCircle className='gymicon'/> </h1>
                    
                    <div className='create'>
                    <p >Create an account with</p>
                    <div className='media'><CgFacebook style={facebook} size={20} /> <FcGoogle style={google} size={20}/> <FaApple style={apple} size={20}/></div>
                    </div>
                    <fieldset>
                    <legend>
                        OR
                    </legend>
                    </fieldset>

                    <div>
                        <input className='noshow' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input className='noshow' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='input input2'>
                        <input type="text" placeholder='Full Name'/>
                        <input type="text" placeholder='Username'/>
                        <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {emailErr && <p className='red-text'>Your email is invalid</p>}
                        <span className='passwordinput'>
                            <input type={isShown ? "text" : "password"} placeholder='Password' name='password' autoComplete='current-password' required='' id='id_password'  value={password} onChange={(e) => setPassword(e.target.value)} />
                        </span>
                        
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
                    <div>
                        <button className='btns' onClick={validate}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
       );
}

export default SignUp;


