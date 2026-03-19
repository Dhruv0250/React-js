import conf from "../conf/config";
import { Client,Account,ID } from "appwrite";

export class AuthService {
    Client=new Client();
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account=new Account(this.Client)
    }

  async createAccount({Email,password,name}){
    try {
        const userAccount = await this.account.create(ID.unique(),Email,password,name);
        if (userAccount){
         return this.login({Email,password})
        }
        else{
        return userAccount;
        }
    } catch (error) {
        throw error
    }
  }
async login ({Email,password}){
    try {
       return await this.account.createEmailPasswordSession(Email,password);
        
    } catch (error) {
        throw error;
    }
}
async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("appwrite service :: getCurrentUser :: error", error)
    }
return null;
}
async logout (){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("appwrite service :: logout :: error", error);
    }
}
}


const authService= new AuthService

export default authService

