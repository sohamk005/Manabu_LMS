import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16'>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Learn skills that shape the future
      </h2>
      <p className="text-base text-gray-500">
        Explore courses on today’s most in-demand technologies — from Python and React to C++ and Flask.
      </p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.cpp_logo} alt="C++" className='w-20 md:w-28'/>
        <img src={assets.java_logo} alt="Java" className='w-20 md:w-28'/>
        <img src={assets.python_logo} alt="Python" className='w-20 md:w-28'/>
        <img src={assets.js_logo} alt="Javascript" className='w-20 md:w-28'/>
        <img src={assets.react_logo} alt="React" className='w-20 md:w-28'/>
        <img src={assets.flask_logo} alt="Flask" className='w-20 md:w-28'/>
      </div>

    </div>
  )
}

export default Companies
