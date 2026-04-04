import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({$id,tittle,featuredImage}) {
  return (
    <div>
      <link to={`/post/${$id}`}>\
      <div className='w-full bg-gray-300 rounded-xl p-4'>
        <div className='w-full justify centre mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={tittle} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{tittle}</h2>
      </div>
      </link>
    </div>
  )
}

export default PostCard
