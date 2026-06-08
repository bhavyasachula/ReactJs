import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <div className='flex flex-column justify container border-6 border-indigo-500 h-full w-screenp-2'>
       <div className='group h-100 w-10 text-center'>
          <div className='bg-red-100 w-10'>1<img src="" alt="" /></div>
          <div className='bg-blue-100 w-10'>2<img src="" alt="" /></div>
          <div className='bg-yellow-100 w-10' >3<img src="" alt="" /></div>
          <div className='bg-green-100 w-10'>4<img src="" alt="" /></div>
        </div>
        </div>
      </>
  )
}

export default App
