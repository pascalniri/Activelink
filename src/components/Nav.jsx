import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
 const activeLink ='text-red-500';
 const normalLink = '';

  return (
    <div className='flex gap-10 bg-black text-white py-4 px-10'>
      <NavLink to='/'
       className={({isActive}) =>isActive? activeLink:normalLink}
      
      >
        <a href="#">Home</a>
      </NavLink>
      
      <NavLink to='/about'
      className={({isActive}) =>isActive? activeLink:normalLink}
      >
        <a href="#">About</a>
      </NavLink>
      <NavLink to='/blog'
      className={({isActive}) =>isActive? activeLink:normalLink}
      >
        <a href="#">Blog</a>
      </NavLink>
      <NavLink to='/contact'
      className={({isActive}) =>isActive? activeLink:normalLink}
      >
        <a href="#">Contact</a>
      </NavLink>
    </div>
  )
}

export default Nav
