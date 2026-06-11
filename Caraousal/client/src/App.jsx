import { useEffect, useRef, useState } from 'react'


import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  const intervalref = useRef(null)

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

  return (
    <>
   <div className='navOuterDiv h-[60px] text-white p-1 text-xl '>
    <nav className='flex flex-row justify-around items-center'>
      <b><i>Image Slider</i></b>
      <b><i><button>Upload</button></i></b>
   </nav>
   </div>
    <div className='outer flex justify-center align-center w-full h-[990px] '>
     
       {/* <button className='border border-black bg-orange-500 mt-[200px]' onClick={prevImg}>prev</button> */}
      <div className='Container flex justify-center align-center m-2 overflow-hidden p-2 m-[60px]'>
          <div className="boxes w-[1200px] h-[800px]" onMouseEnter={stopSlider} onMouseLeave={startSlider}><img className="" src={images[index]} alt="" /></div>
      </div>
      {/* <button className='border border-black bg-blue-700 mt-[200px] ' onClick={nextImg}>next</button> */}
     </div>
   
    </>
  )
}

export default App
