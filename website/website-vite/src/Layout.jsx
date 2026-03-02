import React from 'react'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'
import { Outlet } from 'react-router-dom'
function layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout
