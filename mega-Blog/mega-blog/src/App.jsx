import React ,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import "./App.css"
import authService from "./appwrite/auth";
import { Login, Logout } from "./store/AuthSlice";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

function App(){
const [loading,setLoading]=useState(true);
const dispatch=useDispatch();

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(Login({userData}));
    }else{
      dispatch(Logout(userData))
    }
  })
  .finally(()=>setLoading(false))
},[])

return !loading ?  (
<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
  <div className="w-full block" >
    <Header/> 
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div>
</div>
) : null;

}
export default App;