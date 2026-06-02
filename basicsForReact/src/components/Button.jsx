import React, { useState } from 'react'

function Button({text}) {
  const [color,colorChanger] = useState("red")
const handleonclick=()=>{
  colorChanger(color="blue")
}
  return (
    <>
    <button onclick={handleonclick}
    className={`bg-${color}-=600`}>{text}</button>
    </>
    )
}

export default Button