import React from 'react'
import appwriteService from "../appwrite/config"
import {link} from "react-router-dom"
function PostCard({$id,title,featuredImage }) {
  return (
    <link to={`/post/${$id}`}>
  <div className='w-full h-64 rounded-lg overflow-hidden relative group cursor-pointer'>
  <div className='w-full h-full bg-gray-200 flex items-center justify-center p-4'>
     <img src={appwriteService.getFilePreview(featuredImage)} alt={title}/>
  </div>
  <h2 className='text-lg font-bold mt-2'>{title}</h2>
  </div>
    </link>
  )
}

export default PostCard
