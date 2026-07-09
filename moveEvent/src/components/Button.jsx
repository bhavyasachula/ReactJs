import React, { useState } from 'react'

function Button() {
    const [position,setPosition] = useState({x:0,y:0});
    const handleMouseMove=(e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.ClientX - rect.left;
        const y = e.ClientY - rect.top;
        setPosition(x,y);
    }
  
  return (
    <>
    <div className='Box border h-screen w-screen flex justify-center items-center '>
        <div className='innerBox rounded-3xl h-[70px] w-[70px] flex justify-center items-center p-2'
        onMouseMove={handleMouseMove}>
            <div className='follow  p-1'
            style={{
                left:`${position.x}px`,
                top:`${position.y}px`,
                transform:'translate(-50%,-50%)'
            }}
            >
                ↑
            </div>
        </div>
    </div>
    </>
  )
}

export default Button