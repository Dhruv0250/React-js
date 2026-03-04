
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <UserContextProvider>
        <div className="w-full max-w-md">
          <Login/>
          <Profile/>
        </div>
      </UserContextProvider>
    </div>
  )
}

export default App
