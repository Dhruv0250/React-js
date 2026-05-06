import React from 'react'
import { useDispatch } from 'react-redux'
import { Logout } from '../../store/AuthSlice'
import authservice from "../../appwrite/config"

function LogoutBTn() {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authservice.Logout().then(()=>{
            dispatch(Logout())
        })
    }
  return (
    <button>
        Logout
    </button>
  )
}

export default LogoutBTn
