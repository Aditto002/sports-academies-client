import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Shared/Navbar'

function Main() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Main