import React from 'react'
import { dummyTestimonials } from '../../assets/testimonials'
import { assets } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-bold text-gray-800'> What Our Learners Say </h2>
      <p> Hear from learners who have transformed their skills and careers with Manabu’s expert-led courses. </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            px-4 md:px-0 md:my-16 my-10 gap-6 md:gap-8'>
        {dummyTestimonials.map((testimonial, index) => (
          <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-md my-6 shadow-black/5 overflow-hidden'>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name}/>
              <div>
                <h1 className='text-lg font-medium text-gray-800'> {testimonial.name} </h1>
                <p className='text-gray-800/80'> {testimonial.role} </p>
              </div>
              
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                 {[...Array(5).map((_, i) => (
                  <img className='text-gray-500 mt-5' key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt='star'/> ))]}
              </div>
              <p className='text-gray-500 mt-5'> {testimonial.feedback} </p>
              <a href="#" className='text-blue-500 underline px-5'> Read more </a>
              </div>
          </div>
        ))}
      </div>
    
    
    </div>
  )
}

export default TestimonialsSection
