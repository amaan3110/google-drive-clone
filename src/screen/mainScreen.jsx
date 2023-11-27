import React from 'react'
import Sidebar from './sidebar'
import Data from './data'
import 'boxicons'
import './mainScreen.scss'
import drive from '../assets/google-drive.png'

const mainScreen = () => {
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

            <div className="component">
                <box-icon name='cog'></box-icon>
                <box-icon name='customize'></box-icon>
                <box-icon type='solid' name='user-account'></box-icon>
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