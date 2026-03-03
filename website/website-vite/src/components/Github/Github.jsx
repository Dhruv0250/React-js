import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

  return (
    <div className='bg-gray-600 text-white text-3xl text-center m-4 p-4'>
      Github followers : {data?.followers}
      <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const Githubinfo=async ()=>{
    const response= await fetch('https://api.github.com/users/Dhruv0250')
    return response.json()
}