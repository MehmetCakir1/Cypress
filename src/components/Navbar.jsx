import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-between items-center px-5'>
            <img src="images/logo.png" alt="logo" className='w-[70px]'/>
            <div className='linkDiv font-bold flex gap-x-5'>
              <a href="#" className='hover:text-red-500 link first temp' data-cy="first" aria-label="link">HOME</a>
              <a href="#" className='hover:text-red-500 link second' aria-label="link">ABOUT</a>
              <a href="#" className='hover:text-red-500 link third temp' aria-label="link" >CONTACT</a>
              <a href="#" className='hover:text-red-500 link fourth' aria-label="link">SERVICES</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar