import conf from "../conf/Conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        },
      );
    } catch (error) {
      throw error;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        slug,
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }
  async getPost (slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteTableId,
            slug
        )
    } catch (error) {
        console.log(error)
    }
  }
async getPosts (queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteTableId,
            queries,
        )
    } catch (error) {
        throw error
    }
    return false
}
//file upload 

async uploadFile(file){
try {
     return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
     )
} catch (error) {
    console.log(error)
}
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        );
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
getFilePreview(fileId){
return this.bucket.getFilePreview(
    conf.appwriteBucketId,
    fileId
)
}
}

const service = new Service();

export default service;
