'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion';


const Home = () => {
  return (
    <div id='home' className='flex flex-wrap bg-[#000308] p-3 md:w-3/4 mx-auto text-white'>
      <motion.div initial={{y:'-100vw'}} transition={{ease:"easeOut", duration:1}} animate={{y:0}} className='flex flex-col justify-center text-center px-5'>
      <h3 className='text-2xl'>Hi There! I Am</h3>
      <h1 className='text-4xl text-[#ea580c]'>RITHICK</h1>
      <Image className='mx-auto' src='/19362653-depositphotos-bgremover.png' width={600} height={600} alt='programming'/>
      <p className='text-2xl md:text-4xl  text-center '>A Full-Stack Web Developer passinate about creating interactive applications and experiance on the web.</p>
     <button className='bg-orange-500 rounded-md text-black font-semibold p-2 w-fit mx-auto m-3'>
     <a href='#projects'>View Projects</a>
     </button>
      </motion.div>
      
    </div>

  )
}

export default Home