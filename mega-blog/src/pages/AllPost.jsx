import React,{useState,useEffect} from 'react'
import appwriteService from "../appwrite/config";
import { Container,PostCard } from '../Components';

function AllPost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
    appwriteService.getPosts([]).then((posts)=> setPosts(posts))
    },[])
  return (
    <div>
    
    </div>
  )
}

export default AllPost
