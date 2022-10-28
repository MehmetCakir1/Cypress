import React from 'react'
import { useState } from 'react'

const Main = () => {
  const [isShow,setIsShow]=useState(false)
  return (
    <div className='w-full max-w-[20rem] m-auto text-center'>
      <button
      onClick={()=>setIsShow(!isShow)}
      className="bg-purple-600 text-white py-1 px-4 my-4"
      >SHOW MODAL</button>
      {
        isShow &&
        <div className='modal border border-slate-400 py-8'>
          <h1>This Is Modal</h1>
        </div>
      }

    </div>
  )
}

export default Main