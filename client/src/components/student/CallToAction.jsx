import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    // Added max-w-4xl and ensured horizontal padding is consistent
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-10 max-w-4xl mx-auto'>
      
      {/* Removed 'gap-6' and used 'font-bold' for impact */}
      <h1 className='text-2xl md:text-4xl text-gray-800 font-bold'> Learn. Grow. Build. </h1>
      
      {/* Used max-w-2xl to constrain the paragraph width */}
      <p className='text-base text-gray-500 max-w-2xl text-center'> 
        Learning isn’t a race — it’s a journey of understanding. Take it step by step with guided lessons that make every concept clear and meaningful. 
      </p>
      
      <div className='flex items-center font-medium gap-6 mt-4'> 
        <button className='px-10 py-3 rounded-md text-white bg-violet-600 hover:bg-violet-700 transition'> Get Started </button>
        <button className='flex items-center gap-2 text-violet-600 hover:text-violet-700 transition'> 
          Learn More 
          {/* Ensure the arrow icon is a manageable size */}
          <img src={assets.arrow} alt='arrow icon' className='w-4 h-4' />
        </button>
      </div>
    </div>
  )
}

export default CallToAction