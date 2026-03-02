import{ useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {
  // start with empty strings so inputs are controlled
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)

  const Handler = (e) => {
    e.preventDefault()
    // normalize fields to lowercase keys so consumers can access consistently
    setUser({ username, password })
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={Handler}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
