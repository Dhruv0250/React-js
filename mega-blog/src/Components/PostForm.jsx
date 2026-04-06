import React from 'react'
import { useForm } from 'react-hook-form'
import {Button , Input ,Select , RTE} from './index'
import appwriteService from "../appwrite/config"
import { data, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm() {
    const {register , handleSubmit , control , watch ,setValue , getValues}=useForm({
        defaultValues:{
            title: post?.title||'',
            slug: post?.slug || "",
            content : post?.content||"",
            status: post?.status || "active "
        }
    })
    const navigate= useNavigate()
    const userData = useSelector(status => status.user.userData)

    const submit =async (data) =>{
        if (post) {
            data.image[0] ? appwriteService.uploadFile(data.image[0]) :null
    
            if (File) {
                appwriteService.deleteFile(post.featuredImage)
            }
    const dbPost = await appwriteService.updatePost(post.$id ,{
        ...data,
        featuredImage:File ? $id :undefined,
      if

    })
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default PostForm
