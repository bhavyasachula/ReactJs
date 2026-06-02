import React, { useState } from 'react'

function Button({text}) {
  const [color,colorChanger] = useState("red")
const handleonclick=()=>{
  colorChanger("blue")
}
  return (
    <>
    <button onClick={handleonclick}
    className={`bg-${color}-600`}>{text}</button>
    </>
    )
}

export default Button