import React, { useState } from 'react'

function Button() {
  const boxSize = 70
  const arrowSize = 25
  const half = arrowSize / 2

  const [position, setPosition] = useState({
    x: boxSize / 2,
    y: boxSize / 2,
  })
  const handleMouseLeave=(e)=>{
    
    setPosition({x:35,y:35})
    
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    let x = e.clientX - rect.left
    let y = e.clientY - rect.top

    
    x = Math.max(half, Math.min(x, rect.width - half))
    y = Math.max(half, Math.min(y, rect.height - half))

    setPosition({ x, y })
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
    <div className='innerBox relative h-[80px] w-[80px] border overflow-hidden flex justify-center items-center'>
      <div
        className='innerBox relative h-[70px] w-[70px]  overflow-hidden '
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className='absolute '
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${arrowSize}px`,
            height: `${arrowSize}px`,
            transform: 'translate(-50%, -50%)',
            transition:'0.26s ease-out'
          }}
        >
          <img
            src="/arrowPurple.png"
            className='block w-full h-full'
          />
        </div>
      </div>
    </div>  
    </div>
  )
}

export default Button