import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-between items-center px-5'>
            <img src="images/logo.png" alt="logo" className='w-[70px]'/>
            <div className='font-bold flex gap-x-5'>
              <a href="#" className='hover:text-red-500'>HOME</a>
              <a href="#" className='hover:text-red-500'>ABOUT</a>
              <a href="#" className='hover:text-red-500'>CONTACT</a>
              <a href="#" className='hover:text-red-500'>SERVICES</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar