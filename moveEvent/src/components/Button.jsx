import React from 'react'

function Button() {
    function handleMouseMove(){
        console.log("Mouse entered");
    }
    function mouseOut(){
        console.log("Mouse OUtt");
    }
  return (
    <>
    <div className='Box border h-screen w-screen flex justify-center items-center '>
        <div className='innerBox rounded-3xl h-[70px] w-[70px] flex justify-center items-center p-2'
        onMouseMove={handleMouseMove}>
            <div className='follow  p-1'
            >↑</div>
        </div>
    </div>
    </>
  )
}

export default Button