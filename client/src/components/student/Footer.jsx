import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img className='w-40 h-auto ml-0' src={assets.logoText} alt="Manabu Logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'> Learn what Matters! </p>
        </div>
        <div>
          <h2 className='font-semibold text-white mb-5'> Company </h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
              <li> <a href=""> Home</a> </li>
              <li> <a href=""> About us</a> </li>
              <li> <a href=""> Contact us</a> </li>
              <li> <a href=""> Privacy policy</a> </li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'> Resources </h2>
          <p className='text-sm text-white/80'> Explore our blog for the latest tutorials, tips, and industry insights to enhance your learning journey. </p>
              <div>
                <input type='email' placeholder='Your email address' className='mt-4 px-3 py-2 rounded-l-md border border-white/30 bg-gray-800 text-white/90 focus:outline-none focus:ring-2 focus:ring-violet-500'/>
                <button className='px-4 py-2 bg-violet-600 text-white rounded-r-md hover:bg-violet-700 transition'> Subscribe </button>
              </div>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'> Copyright 2025 © Manabu. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
