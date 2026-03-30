import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { Login, Logout } from './store/authSlice'

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
    <div className='min-h-screen flex flex-col justify-between bg-gray-50'>
      <header className='bg-white shadow'>
        {/* Header content */}
      </header>
      <main className='grow container mx-auto p-4'>
        {/* Main content */}
      </main>
      <footer className='bg-gray-800 text-white'>
        {/* Footer content */}
      </footer>
    </div>
  ) : (
    <div className='flex items-center justify-center min-h-screen'>
      <div>Loading...</div>
    </div>
  )
}

export default App
