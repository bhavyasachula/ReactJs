import { useState } from 'react'
// import './App.css'


function App(Props) {
  const [color, setColor] = useState("")

  return (
    <>
    <div className='flex flex-warp gap-10 h-screen justify-center items-center ' style={{backgroundColor:color}}>

      <button className='bg-red-700 p-2 rounded-2xl'
      onClick={()=>{
        setColor("red")
      }}>Red</button>
        <button className='bg-blue-700 p-2 rounded-2xl'
      onClick={()=>{
        setColor("blue")
      }}>blue</button>
        <button className='bg-green-700 p-2 rounded-2xl'
      onClick={()=>{
        setColor("green")
      }}>green</button>
      
    </div>
    </>
  )
}

export default App
