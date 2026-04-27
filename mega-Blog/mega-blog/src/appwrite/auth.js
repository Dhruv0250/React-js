import { Client, Account,ID } from 'appwrite';
import conf from '../conf/Conf.js'

export class AuthService {
  Client=new client();
  Account;


  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.Account=new Account(this.client);
  }

  async createAccount ({email,password,name}){
  
  }
}