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
        <h3 className=' text-md md:text-2xl m-2 text-justify break-normal whitespace-normal'>Hello!👋 I&apos;m Rithick, a passionate Full Stack Web Developer with expertise in front-end and back-end technologies.
           Skilled in HTML, CSS, JavaScript, React.js, Node.js, and more. Thrives on creating user-friendly, high-performance
            web applications. Let&apos;s build something
             incredible together! 💻🚀</h3>
           
        <h3 className=' text-md md:text-2xl m-2 text-justify break-normal whitespace-normal'>📚 I&apos;m always on the hunt for the latest tech trends and
         shiny new technologies. Staying ahead of the curve? It&apos;s my thing. Think of me as your tech-savvy compass,
          guiding our projects to not just be current but also as futuristic as a sci-fi movie.
        </h3>
        <button className='bg-orange-500 rounded-md text-black font-semibold p-2 w-fit mx-auto m-3 '><a href='/Rithick_resume.pdf' download='Rithick-G-Resume'>Download Resume</a></button>
      </div>
      </div>
    </div>
  )
}

export default About