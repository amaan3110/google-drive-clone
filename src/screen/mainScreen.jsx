import React from 'react'
import Sidebar from './sidebar'
import Data from './data'
import 'boxicons'
import './mainScreen.scss'
import drive from '../assets/google-drive.png'

import { auth } from '../../firebase'

const mainScreen = () => {


    const logOut = ()=>{
        auth.signOut();
    }
  return (
    <>
        <div className="app-bar">
            <div className="logo">
                <img src={drive} alt="" />
                Drive
            </div>
            <div className="search">
                <box-icon name='search'></box-icon>
                <input type="text" placeholder='Search here' />
                <box-icon name='analyse'></box-icon>
            </div>

            <div className="setting">
                <box-icon name='cog'></box-icon>
                <box-icon name='customize'></box-icon>
            </div>
            <div className="logout" onClick={logOut}>
                <box-icon name='user-pin'size='md'></box-icon>
            </div>

        </div>
        <div className="container">
            <Sidebar />
            <Data />
        </div>
    </>
  )
}

export default mainScreen