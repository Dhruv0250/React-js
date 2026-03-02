import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const[numAllowed,setNumAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')
  const {PasswordRef}=useRef()

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) {
      str+="0123456789"
    }
    if (charAllowed) {
      str+=" !@#$%^&*()_+"
    }
    for (let i = 0; i < length; i++) {
       let char=Math.floor(Math.random() *str.length)
      pass+=str.charAt(char)
    }
   setPassword(pass)

  },[numAllowed,charAllowed,length,setPassword])

  const copyPaste=useCallback(()=>{
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
  passwordGenerator()
  },[passwordGenerator])

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-6 drop-shadow">Password Generator</h1>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={password}
              placeholder="password"
              readOnly
              ref={PasswordRef}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={copyPaste}
              className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-r-md hover:bg-purple-700 transition"
            >
              Copy
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer w-full accent-purple-600"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-gray-700 font-medium">Length: <span className="font-bold text-purple-700">{length}</span></label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="number"
                className="accent-purple-600 w-4 h-4"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="number" className="text-gray-700">Numbers</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="char"
                className="accent-purple-600 w-4 h-4"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="char" className="text-gray-700">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
