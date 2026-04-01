import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { Login, Logout } from './store/authSlice'
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(Login({ userData }))
        } else {
          dispatch(Logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        {/* TODO:  <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
