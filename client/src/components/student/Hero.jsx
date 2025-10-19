import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-25 pt-15 px-7 
    md:px-0 space-y-7 text-center bg-gradient-to-b from-violet-100/70 to-white'>
      
      <h1 className='md:text-6xl text-3xl relative 
      font-bold text-gray-800 max-w-3xl mx-auto 
      
      // === ADDED LINE SPACING HERE ===
      leading-tight md:leading-normal 
      // ===============================
      '> 
        
        Learn 
        
        <span className='text-violet-600 relative inline-block px-1'> 
          what matters 
          <img 
            src={assets.sketch} 
            alt='sketch underline' 
            // === ADJUSTED IMAGE SIZING & POSITIONING HERE ===
            className='md:block hidden absolute -bottom-12 left-1/2 -translate-x-1/2 
                       w-[120%] md:w-[105%] h-auto object-contain max-w-none' 
            // =================================================
          /> 
        </span>

        , in the best way possible! 
      </h1>

      <p className='text-gray-500 max-w-2xl mx-auto px-4 md:px-0'>
        Join thousands of learners and gain new skills with our expert-led courses.
      </p>

      <SearchBar />
      
    </div>
  )
}

export default Hero