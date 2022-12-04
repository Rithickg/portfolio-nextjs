import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center text-center mx-auto bg-[#202020]'>
      <h1 className='text-4xl'>About Me</h1>
      <div className='flex'>
      <div className='hidden md:block'>
        <Image src='/IMG-20210316-WA0008-edit.jpg' alt='rithick' width={600} height={600}/>
      </div>
      <div className=' flex flex-col justify-center'>
        <h3>
        Currently, I am Pursuing my Bachelors degree in Vels Institute of Science, Technology & Advanced Studies (VISTAS). My character is one of diligence and trustworthiness. Time management is one of my strong suits,
         and I am always eager to learn new skills. In hectic settings, I can operate both independently and collaboratively.
        </h3>
        <h3>Name : Rithick</h3>
        <h3>Date Of Birth : 28/12/2002</h3>
        <h3>Email : rithickg567@gmail.com</h3>
        <h3>Phone : 8056215840</h3>
        <button><a href='/Resume-Rithick-G.pdf' download='Resume-Rithick-G'>Download Resume</a></button>
      </div>
      </div>
    </div>
  )
}

export default About