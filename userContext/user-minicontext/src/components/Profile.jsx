import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user}=useContext(UserContext)
   if (!user) return <h2>please Login</h2>

   return (
     <h2>Welcome {user.username}</h2>
   )
}

export default Profile
