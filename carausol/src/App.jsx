import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div className='Container b-1 h-100 w-100 '>
          <div className='bg-red-100'>1<img src="" alt="" /></div>
          <div className='bg-blue-100'>2<img src="" alt="" /></div>
          <div className='bg-yellow-100' >3<img src="" alt="" /></div>
          <div className='bg-green-100'>4<img src="" alt="" /></div>
        </div>
      </>
  )
}

export default App
