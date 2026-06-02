import React, { useState } from 'react'

function Button({ text }) {
  const colors = ["red", "blue", "green", "yellow"]

  const [index, setIndex] = useState(0)

  const handleOnClick = () => {
    setIndex((index + 1) % colors.length)
  }

  return (
    <button
      onClick={handleOnClick}
      className={
        index === 0 ? "bg-red-600" :
        index === 1 ? "bg-blue-600" :
        index === 2 ? "bg-green-600" :
        "bg-yellow-600"
      }
    >
      {text}
    </button>
  )
}

export default Button