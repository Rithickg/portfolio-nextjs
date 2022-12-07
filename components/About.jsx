import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center text-center mx-auto bg-[#202020]'>
      <h1 className='text-4xl text-orange-500 p-2'>About Me</h1>
      <div className='flex flex-row justify-center'>
      <div className='hidden md:block w-1/3 p-2'>
        <Image src='/IMG-20210316-WA0008-edit.jpg' className='rounded-md' alt='rithick' width={500} height={500}/>
      </div>
      <div className=' flex flex-col justify-center text-lg md:text-xl md:w-2/3 p-3'>
        <h3 className=' text-xl md:text-2xl m-2'>
        Currently, I am Pursuing my Bachelors degree in Vels Institute of Science, Technology & Advanced Studies (VISTAS). My character is one of diligence and trustworthiness. Time management is one of my strong suits,
         and I am always eager to learn new skills. In hectic settings, I can operate both independently and collaboratively.
        </h3>
        <h3>Name : Rithick</h3>
        <h3>Date Of Birth : 28/12/2002</h3>
        <h3>Email : rithickg567@gmail.com</h3>
        <h3>Phone : 8056215840</h3>
        <button className='bg-orange-500 rounded-md text-black font-semibold p-2 w-fit mx-auto m-3'><a href='/Resume-Rithick-G.pdf' download='Resume-Rithick-G'>Download Resume</a></button>
      </div>
      </div>
    </div>
  )
}

export default About