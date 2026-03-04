import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/Usercontext'
function Login() {
    const [username,setUsername]=useState('')
    const[password,setPassword]=useState("")
    const {setUser}=useContext(UserContext)

    const handleSubmit= (e)=>{
   e.preventDefault()
   setUser({username,password})
}

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 mb-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder='Username'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input 
          type="password" 
          placeholder='Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
