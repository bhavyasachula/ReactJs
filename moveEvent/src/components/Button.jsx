import React, { useState } from 'react'

function Button() {
  const boxSize = 30
  const arrowSize = 8
  const half = arrowSize / 2
  const center = boxSize / 2

  const [position, setPosition] = useState({
    x: center,
    y: center,
  })

  const handleMouseLeave = () => {
    setPosition({ x: center, y: center })
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    let x = e.clientX - rect.left
    let y = e.clientY - rect.top

    x = Math.max(half, Math.min(x, rect.width - half))
    y = Math.max(half, Math.min(y, rect.height - half))

    setPosition({ x, y })
  }

  // inner box will move a little based on arrow movement
  const moveX = (position.x - center) * 0.3
  const moveY = (position.y - center) * 0.3

  return (
    <div className='border relative h-screen w-screen flex justify-center items-center'>
      <button className='absolute bottom-12 right-4'>

        <div className='outerBox rounded-3xl relative h-[40px] w-[40px]  overflow-hidden flex justify-center items-center'>
          <div
            className='innerBox bg-purple-200 relative h-[30px] w-[30px] overflow-hidden'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translate(${moveX}px, ${moveY}px)`,
              transition: '0.25s ease-out'
            }}
          >
            <div
              className='absolute'
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${arrowSize}px`,
                height: `${arrowSize}px`,
                transform: 'translate(-50%, -50%)',
                transition: '0.25s ease-out'
              }}
            >
              <img
                src="/circle.png"
                className='block w-full h-full pointer-events-none select-none'
              />
            </div>
          </div>

        </div>
      </button>
    </div>
  )
}

export default Button