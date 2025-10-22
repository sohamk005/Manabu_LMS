import React from 'react'
import { Educators } from '../../assets/course_data'
import {useUser, UserButton} from '@clerk/clerk-react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const educatorData = Educators

  const { user } = useUser()
  return (
    <div className='flex items-center 
    justify-between px-4 md:px-8 border-b nrder-gray-500 py-3'>
      <Link to='/'>
      <img src={assets.logo} alt='logo' className='w-28 lg:w-32' />
      </Link>
      <div className='flex items-center gap-5 text-gray-500 relative'>
        <p> Hi! {user ? user.fullName : 'Developers'}</p>
        {user ? <UserButton /> : <img className='max-w-8' src={assets.profile_img_1} />}
      </div>

    </div>
  )
}

export default Navbar
