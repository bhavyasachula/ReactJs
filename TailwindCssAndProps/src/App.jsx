import { useState } from 'react'
// import './App.css'


function App(Props) {
  const [color, setColor] = useState("")

  return (
    <>
    <div className='w-full h-screen duration-100 ' style={{backgroundColor:color}}>
    <div className='border-t-2 border-b-4 fixed rounded-2xl flex gap-10 flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <button className='text-white bg-red-700 p-2 rounded-2xl'
      onClick={()=>{
        setColor("red")
      }}>Red</button>
        <button className='text-white bg-blue-700 p-2 rounded-2xl'
      onClick={()=>{
        setColor("blue")
      }}>blue</button>
        <button className='text-white bg-green-700 p-2 rounded-2xl'
      onClick={()=>{
        setColor("green")
      }}>green</button>
      <button className='text-white bg-black p-2 rounded-2xl'
      onClick={()=>{
        setColor("black")
      }}>black</button>
      <button className=' text-white bg-purple-700 p-2 rounded-2xl'
      onClick={()=>{
        setColor("purple")
      }}>purple</button>
      </div>
    </div>
    </>
  )
}

export default App
