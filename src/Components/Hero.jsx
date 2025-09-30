import React from 'react'
import devflx from '../assets/devflx-hero.jpg'


const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-cneter justify-between px-8  md:px-20 py-16'>
        <div className='md:w-1/2 space-y-6'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight'>Devflx — Software Development Agency</h1>
        <p className='text-lg text-gray-500'>Code, Cloud, Conquer. We craft world‑class web and mobile apps, design intuitive experiences, automate with AI, and harden your cloud security.</p>
        <div className='flex space-x-4'>
            <button className='bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-800 transition'>Start a project</button>
            <button className='border border-gray-400 px-6 py-3  rounded-lg font-medium hover:bg-gray-200 transition'>Explore Services</button>
        </div>
        <p className='text-gray-600'>info@devflx.com • +92 314 8640651</p>
        </div>
       <div className="md:w-1/2 mt-10 md:mt-0 flex items-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full h-full flex items-center justify-center">
          <img 
            src={devflx} 
            alt="Devflx Card" 
            className="w-full max-w-md h-auto object-contain" 
          />
        </div>
      </div> 


    </section>
  )
}

export default Hero
