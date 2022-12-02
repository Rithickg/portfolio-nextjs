'use client'
import React, { useState } from 'react'
import {RiBillLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Home from './Home'

const NavBar = () => {
    const [open,setOpen]=useState(false);

  return (
  <div className='shadow-md w-full sticky top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <span className='text-3xl text-indigo-600 mr-1'>
        <RiBillLine/>
     </span>
        RITHICK
    </div>
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    { open ? <AiOutlineClose/> : <GiHamburgerMenu/> }
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
     left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                   <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='' className='text-gray-800 hover:text-gray-400 duration-500'>HOME</a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='' className='text-gray-800 hover:text-gray-400 duration-500'>ABOUT</a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='' className='text-gray-800 hover:text-gray-400 duration-500'>SKILLS</a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='' className='text-gray-800 hover:text-gray-400 duration-500'>PROJECTS</a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='' className='text-gray-800 hover:text-gray-400 duration-500'>CONTACT</a>
                    </li>
    </ul>
    </div>
  </div>

  )
}

export default NavBar