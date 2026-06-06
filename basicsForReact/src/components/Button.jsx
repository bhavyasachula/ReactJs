import React, { useState } from 'react'

function Button({text}) {
  const colour = ["red","blue","green","yellow"]
  const [index,setIndex] = useState(0)
  
  const handleonclick=()=>{
  setIndex((prev)=>(prev+1)% colour.length)
}
  return (
    <>
    <button onClick={handleonclick}
    className={`bg-${colour[index]}-600`}>{text}</button>
    </>
    )
}

export default Button