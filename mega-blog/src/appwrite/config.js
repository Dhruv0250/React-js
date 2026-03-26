import conf from '../conf/config'

import { Client,ID,TablesDB,Storage,Query } from 'appwrite'

export class service{
    client = new client ();
    databases;
    bucket;
      constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new TablesDB(this.client)
        this.bucket= new Storage(this.client)
      }
    async createPost({tittle,slug,content, featuredImage,status,userid}){
        try {
            return await this.databases.createRow(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {
                    content,
                    tittle,
                    featuredImage,
                    status,
                    userid
                }
            )
        } catch (error) {
         console.log(error)   
        }
    }

    async updatePost(slug,{tittle,content, featuredImage,status}){
     try {
        return await this.databases.updateRow(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionId,
            slug,
            {
                tittle,
                content,
                status,
                featuredImage
            }
        )
     } catch (error) {
        console.log(error)
     }
    }
    async deletePost({slug}){
    try {
        await this.databases.deleteRow(
            conf.appwriteCollectionId,
            conf.appwriteDatabaseID,
            slug
        ) 
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
    }
    async getPost (slug){
        try {
            return await this.databases.getRow (
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getPosts(quaries =[Query.equal("status","active")]){
        try {
            return await this.databases.listRows(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseID,
                [
                    quaries,
                    
                ]
            )
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    //file update service 

    async uploadFile(file){
 try {
    return await this.bucket.createFile(
        conf.appwriteBucketID,
        ID.unique(),
        file
    )
 } catch (error) {
    console.log(error);
    return false
    
 }
    }
    async fileFile(fileId){
   try {
    await this.bucket.deleteFile(
        conf.appwriteBucketID,
        fileId
    )
    return true
   } catch (error) {
    console.log(error);
    return false;
    
   }
    }
    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileID
        )
    }
}


const service = new Service()
export default service;