import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Layout from './layout.jsx'
import Header from './assets/components/header/Header.jsx'
import Footer from './assets/components/footer/Footer.jsx'
import Home from './assets/components/home/Home.jsx'
import Contact from './assets/components/contact/Contact.jsx'
import About from './assets/components/about/About.jsx'
import Github from './assets/components/github/Github.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"Header",
        element:<Header/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"footer",
        element:<Footer/>
      },
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"/Github",
        element:<Github/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
