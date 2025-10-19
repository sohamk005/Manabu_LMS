import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Explore Our Courses
      </h2>
      <p className="text-sm md:text-base text-gray-500 text-center mt-2 max-w-2xl mx-auto">
        Browse through expertly designed courses to master coding, development, and real-world problem-solving — at your own pace.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            px-4 md:px-0 md:my-16 my-10 gap-6 md:gap-8'>
        {allCourses.slice(0,4).map((course, index) => <CourseCard key={index} course={course}/>)}
      </div>


      <Link to={'/course-list'} onClick={() => scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded-full'> 
      Show all courses </Link>
    </div>
  )
}

export default CoursesSection
