import React from 'react'
import {Container , Logo, LogoutBTn} from '../Index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
  const authState = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItem =[
    {
      name:"Home",
      slug:"/",
      active: true
    },
    {
      name : "Login",
      slug : "/login",
      active : !authState
    },
    {
      name : "Signup",
      slug : "/signup",
      active : !authState
    },
    {
      name :"All-posts",
      slug : "/all-posts",
      active : authState
    },
    {
      name :"Add-post ",
      slug : "/add-post ",
      active :authState,
    }
  
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to={"/"} className='text-2xl font-bold text-white'>Mega Blog</Link>
            <Logo/>
          </div>
            <ul className='flex ml-auto'>
              {navItem.map((item)=>(
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)} className='text-white mx-2'>
                      {item.name}
                    </button>
                  </li>
                ):null
              ))}
              {authStatus &&  (
                <li>
                  <LogoutBTn/>
                </li>
              )}
            </ul>
        </nav>
      </Container>

    </header>
  )
}

export default Header
