import React from 'react'
import Login from './loginPage/login'
import Screen from './screen/mainScreen'

import {auth} from '../firebase'; 
import {useAuthState} from 'react-firebase-hooks/auth';

const App = () => {

  const [user] = useAuthState(auth); 
  return (
    <>

    {
      user ? (<Login/>) : (<Screen/>)
    }
    
    
    </>
  )
}

export default App