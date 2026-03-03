import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { Githubinfo } from './components/Github/Github.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
       {
        path:"",
        element:<Home/>
       },
       {
        path:"about",
        element:<About/>
       },
       {
        path:"contact",
        element:<Contact/>
       },
       {
        path:"user/:userid", 
        element:<User/>
       },
       {
        loader: Githubinfo,
        path:"Github",
        element:<Github/>,
       
       },
       
       


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
