import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'


function Logoutbtn() {
    const dispatch =useDispatch()
    const logoutHandker=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandker}
    >
        Logout
    </button>
  )
}

export default Logoutbtn
