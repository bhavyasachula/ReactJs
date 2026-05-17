import { useEffect,useState,useCallback,useRef } from 'react'
import * as React from 'react'
function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef()
  const passwordGenerator =  useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str += "~!@$%^&*(){}+=[]"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)

  },[length,numberAllowed,charAllowed])
    
  const CopytoClipboard = useCallback(()=>{

  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full  max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-red-100 '> <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type="text" 
          value={password}
          className='outline-none  w-full py-1 px-3'/>
          <button className='p-2 outline-none bg-blue-600 text-white'
          onClick={CopytoClipboard}
          >copy</button>
      </div>
      <div className='flex align-center gap-1'>
      <input 
      type="range"
      min={5}
      max={30}
      value={length}
      onChange={(e)=>{setlength(e.target.value)}}
      ref={password}
       />
      <label>range:</label>
      <label>{length}</label> 
      
      <input type="checkbox" 
      onChange={()=>{
        setNumberAllowed( (prev) => !prev )
      }}/>
      <label >Numbers</label>
      <input type='checkbox'
      onChange={()=>{
        setCharAllowed((prev)=>!prev)
      }}/>
      <label >SpecialChar</label>
      
      </div>  
     </div>
    </>
  )
}

export default App
