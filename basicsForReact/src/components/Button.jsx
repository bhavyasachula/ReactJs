import React, { useState } from 'react'

function Button({text}) {
  const [color,colorChanger] = useState(["red","blue","green","yellow"])
const handleonclick=()=>{
  colorChanger(["blue","green","yellow"])
}
  return (
    <>
    <button onClick={handleonclick}
    className={`bg-${color}-600`}>{text}</button>
    </>
    )
}

export default Button