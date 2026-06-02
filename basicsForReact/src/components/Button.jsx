import React, { useState } from 'react'

function Button({text}) {

  return (
    <>
    <button className={`${text==="clickme"?"bg-red-400":"bg-blue-200"}`}>{text}</button>
    </>
    )
}

export default Button