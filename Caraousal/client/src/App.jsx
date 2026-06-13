import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  const [showinput,setShowInput] = useState(false)
  const intervalref = useRef(null)
  const [image,setgetImages] = useState([])
  const url = useRef()


  async function getImagesUrl(){
    const response = await axios.get("http://localhost:2000/fetchUrl")
    console.log(response.data);
    setgetImages(response.data)
  }

  useEffect(()=>{
    getImagesUrl()
  },[])

function nextImg(){
  setIndex((index+1)%(image.length))
}

function prevImg(){
  if(index===0){
  setIndex(image.length-1)
}else{
    setIndex(index-1)}
 }


useEffect(()=>{
  intervalref.current = setInterval(()=>{
  setIndex(prev => (prev + 1) % image.length)
 },2000)

  return ()=> {
    // Cleanup code avoid memeory leaks as a scenario if the component gets removed from the screen it uses the memory but there is no such component in the ui so to avoid we write the cleanup code
    clearInterval(intervalref.current)}
 },[image.length])

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
    setIndex((prev)=>(prev+1)%image.length)
  }, 2000);
}

const handleForm = async(e) =>{
  e.preventDefault()
  try{
  const response = await axios.post("http://localhost:2000/upload",{ 
    url:url.current.value
  });

  console.log(response.data)

  }
  catch(error){
    console.log(error);
  };
    setShowInput(false)
  url.current.value = "";

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
      onSubmit={handleForm}>

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
          <div className="boxes w-[1200px] h-[800px] " onMouseEnter={stopSlider} onMouseLeave={startSlider}><img className="" src={image[index]} alt="" /></div>
      </div>
      {/* <button className='border border-black bg-blue-700 mt-[200px] ' onClick={nextImg}>next</button> */}
     </div>
   
    </>
  )
}

export default App
