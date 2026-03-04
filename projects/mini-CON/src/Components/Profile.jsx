import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
const {user}=useContext(UserContext)

if(!user)return (
  <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
    <p className="text-lg text-gray-600 font-semibold">Please Login to continue</p>
  </div>
)
  
return (
  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-2xl p-8 text-center transform hover:scale-105 transition-transform duration-200">
    <p className="text-3xl font-bold text-white">Welcome back!</p>
    <p className="text-5xl font-bold text-white mt-4">{user.username}</p>
    <div className="mt-6 inline-block bg-white bg-opacity-20 rounded-full px-6 py-2">
      <p className="text-black font-semibold">Logged in successfully</p>
    </div>
  </div>
)
}

export default Profile
