import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  const [showinput,setShowInput] = useState(false)
  const intervalref = useRef(null)
  const url = useRef()

  const images = [
  "https://images.unsplash.com/photo-1706805169488-73a001000382?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1742717817785-54249562494c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1776261762008-d78c9b6c4ad6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  "https://images.unsplash.com/photo-1755134148217-2dd89cc6a2c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1742712608977-4f47f57c6093?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

function nextImg(){
  setIndex((index+1)%(images.length))
}

function prevImg(){
  if(index===0){
  setIndex(images.length-1)
}else{
    setIndex(index-1)}
 }


useEffect(()=>{
  intervalref.current = setInterval(()=>{
  setIndex(prev => (prev + 1) % images.length)
 },2000)

  return ()=> {
    // Cleanup code avoid memeory leaks as a scenario if the component gets removed from the screen it uses the memory but there is no such component in the ui so to avoid we write the cleanup code
    clearInterval(intervalref.current)}
 },[index])

//feat: user can upload thier own photo to watch the slideshow
const handleInput = () => {
  setShowInput(!showinput)
}

const stopSlider=()=>{
  clearInterval(intervalref.current)
}


const startSlider = () =>{
  // clearing the old interval when app is started 
  clearInterval(intervalref.current)
 // Creating the new interval
  intervalref.current = setInterval(() => {
    setIndex((prev)=>(prev+1)%images.length)
  }, 2000);
}

const handleForm = async(e) =>{

  try{
  const response = await axios.post("http://localhost:2000/upload",{ url:url.current.value,});
  console.log(response.data)
  }
  catch(error){
    console.log(error);
  };
  
}

  return (
    <>
   <div className='navOuterDiv h-[60px] text-white p-1 text-xl '>
    <nav className='flex flex-row justify-around items-center'>
      <b><i>Image Slider</i></b>
      <b><i><button onClick={handleInput}>
        Upload
        </button></i></b>
   </nav>
    { showinput 
    ?
  <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-50">

    <form className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl flex flex-col gap-4 w-[500px]"
      action={handleForm}>

      <h2 className="text-white text-2xl text-center">
        Upload Image
      </h2>

      <input
        type="text"
        ref={url}
        placeholder="Enter image URL"
        className="bg-white/20 border border-white/30 rounded-md p-3 text-white placeholder-gray-300 outline-none"
      />

      <div className="flex gap-3 justify-center">
        <input
          type="submit"
          value="Submit"
          className="submitbtn bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500 text-white p-2 rounded-md cursor-pointer"
        />

        <input
          type="button"
          onClick={() => setShowInput(false)} 
          value="Close"
          className="closebtn bg-red-600 text-white px-4 py-3 rounded-md"
        />
    

      </div>

    </form>

  </div>
  :
  ""
}

   </div>
    <div className='outer flex justify-center align-center w-full h-[990px] '>
     
       {/* <button className='border border-black bg-orange-500 mt-[200px]' onClick={prevImg}>prev</button> */}
      <div className='Container flex justify-center align-center m-2 overflow-hidden p-2 m-[60px]'>
          <div className="boxes w-[1200px] h-[800px] " onMouseEnter={stopSlider} onMouseLeave={startSlider}><img className="" src={images[index]} alt="" /></div>
      </div>
      {/* <button className='border border-black bg-blue-700 mt-[200px] ' onClick={nextImg}>next</button> */}
     </div>
   
    </>
  )
}

export default App
