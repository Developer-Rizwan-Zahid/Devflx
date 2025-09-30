import React from 'react'

const Navbar = () => {
  return (
  <nav className='flex items-center justify-between px-8 py-5 shadow-sm'>
    <div className='text-2xl font-bold text-gray-800'>
        Devflx
    </div>
    <div className='hidden md:flex space-x-8 text-gray-800 font-medium'>
        <a href="#services" className='hover:text-gray-400'>Services</a>
          <a href="#about" className='hover:text-gray-400'>About</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
    </div>
    <div className='border border-gray-400 px-5 py-2 rounded-lg font-medium hover:bg-gray-200'>
        <button>Lets talk</button>
    </div>

  </nav>
  )
}

export default Navbar
