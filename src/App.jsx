import React from 'react'
import './App.scss'
import Screen from './screen/mainScreen'
import 'boxicons'

import {auth} from '../firebase'; 
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';


const App = () => {

  const provider = new GoogleAuthProvider();

  const signIn = ()=>{
    signInWithPopup(auth, provider)
  }

  const createAccount = ()=>{
    window.location.href = 'https://accounts.google.com/signup/v2/createaccount?theme=glif&flowName=GlifWebSignIn&flowEntry=SignUp';
  }

  const [user] = useAuthState(auth);
  return (
    <>

    {
      user ? (<Screen/>) : 
      (
        <div className="login-box">
          <img src="https://cdn.usbrandcolors.com/images/logos/google-logo.svg" alt="" />
          <h2>Sign In</h2>
          <p>to continue to Google Drive</p>
          <button onClick={signIn}>
          <box-icon type='logo' name='google'></box-icon>
          <span>Signin with your Google Account</span>
          </button>
          <button onClick={signIn}>
          <box-icon type='logo' name='github'></box-icon>
          <span>Signin with your Github Account</span>
          </button>
          <p>Not your computer? Use Guest mode to sign in privately.</p>
          <h4 onClick={createAccount}>Create Account</h4>
        </div>
      )
    }
    
    
    </>
  )
}

export default App