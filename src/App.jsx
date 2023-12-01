import React from 'react'
import './App.scss'
import Screen from './screen/mainScreen'

import {auth} from '../firebase'; 
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';


const App = () => {

  const provider = new GoogleAuthProvider();

  const signIn = ()=>{
    signInWithPopup(auth, provider)
  }

  const [user] = useAuthState(auth);
  return (
    <>

    {
      user ? (<Screen/>) : 
      (<button onClick={signIn}>Signin</button>)
    }
    
    
    </>
  )
}

export default App