import React from 'react'
import './login.scss'
import social from '../assets/social.png'
import 'boxicons'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth }  from '../../firebase';


const login = () => {

  const signin = async () => { 
    const provider = new GoogleAuthProvider();
    try{
      await signInWithPopup(auth, provider);
    }
    catch (error){
      console.error('Google login error:', error);
    }
  }

  return (
    <div>
        <div className="form-container">
          <form className='form'>
              <img src={social} alt="google" />
              <h3>Sign In</h3>
              <h3>to continue to Google Drive</h3>
              <button className="login-box" onClick={signin}>
                <box-icon type='logo' name='google'></box-icon>
                Sign in using Google Account
              </button>
              <button className="login-box">
                <box-icon type='logo' name='github'></box-icon>
                Sign in using Github Account
              </button>
              <br/>
              <h5>Not your computer? Use Guest mode to sign in privately.</h5>
          </form>
        </div>
    </div>
  )
}

export default login