import React from 'react'
import { GiHamburgerMenu  } from "react-icons/gi";
import { useState } from 'react'
const Navbar = () => {
  
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
        <div className= 'text-xl font-medium'>Haram Adnan</div> 
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
      <li className='menuLink'><a href='#hero'>Home</a></li>
      <li className='menuLink'><a href='#about'>About</a></li>
      <li className='menuLink'><a href='#projects'>Projects</a></li>
      <li className='menuLink'><a href='#skills'></a>Skills</li>
      <li className='menuLink' ><a href='#contact'>Contact</a>
      </li>
     </ul>
     <GiHamburgerMenu className='md:hidden' size={35} />
      </div>
      </div>

      
  )
}

export default Navbar;

