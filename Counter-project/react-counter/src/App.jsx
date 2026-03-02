import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const addVal=function(){
  if (count<=20) {
  setCount(prevCount=>prevCount+1)    
  }

}
const RemoveVal=function(){
  if (count>=1) {
    setCount(count-1)
  }
 
}

  return (
    <>
   <div>
    counter 
   </div>

  <button onClick={addVal}>Add value</button>
  <button onClick={RemoveVal}>Remove value</button>
  <footer>{count}</footer>
    </>
  )
}

export default App
