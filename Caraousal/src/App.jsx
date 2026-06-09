import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='outer flex justify-center w-full h-screen border border-black p-2 '>
      <div className='Container flex flex-row m-2 border border-black w-[920px] h-[440px] overflow-x-scroll p-2'>
          <div className="boxes"><img src="" alt="" /></div>
          <div className="boxes"><img src="" alt="" /></div>
          <div className="boxes"><img src="" alt="" /></div>
          <div className="boxes"><img src="" alt="" /></div>
      </div>
     </div>
    </>
  )
}

export default App
