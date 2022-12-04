'use client'
import React from 'react'
import Image from 'next/image'


const Home = () => {
  return (
    <div id='home' className='flex flex-wrap bg-[#000308] text-white'>
      <div className='flex flex-col justify-center text-center  px-5'>
      <h3 className='text-2xl'>Hi There! I Am</h3>
      <h1 className='text-4xl  text-[#ea580c]'>RITHICK</h1>
      <Image className='mx-auto sm:hidden' src='/19362653-depositphotos-bgremover.png' width={600} height={600} alt='programming'/>
      <p className='text-xl break-normal '>A Full-Stack Web Developer passinate about creating interactive applications and experiance on the web.</p>
      <a href='/Resume-Rithick-G.pdf' download='Resume-Rithick-G'>Resume</a>
      </div>
       <div className='mx-auto hidden sm:block'>
       <Image src='/19362653-depositphotos-bgremover.png' width={600} height={600} alt='programming'/>
       </div>
    </div>

  )
}

export default Home