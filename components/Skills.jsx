import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
     <div className='p-2'>
      <div>
      <h3 className='text-center text-2xl text-orange-500'>Skills</h3>
      </div>
      <div id='skills' className=' md:w-3/5 sm:w-full mx-auto p-10 flex justify-around text-center flex-wrap'>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/html-1.svg' width={100} height={100} alt='html'/>
        <h3>HTML</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/css-3.svg' width={100} height={100} alt='css'/>
        <h3>CSS</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/logo-javascript.svg' width={100} height={100} alt='javascript'/>
        <h3>JavaScript</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/tailwind-css-2.svg' width={100} height={100} alt='tailwindcss'/>
        <h3>TailwindCss</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/react-2.svg' width={100} height={100} alt='reactjs'/>
        <h3>ReactJs</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/nodejs-1.svg' width={100} height={100} alt='nodejs'/>
        <h3>NodeJs</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/expressjs-ar21svg-2.svg' width={100} height={100} alt='expressjs'/>
        <h3>ExpressJs</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/mongodb-icon-1.svg' width={100} height={100} alt='mongodb'/>
        <h3>MongoDB</h3>
        </div>
        <div className='p-5 hover:bg-[#202020] rounded-md m-2'>
        <Image src='/nextjs3.svg' width={100} height={100} alt='nextjs'/>
        <h3>NextJs</h3>
        </div>
        {/* <div>
        <Image src='/sass-1.svg' width={30} height={30} alt='css'/>
        </div>
        <div>
        <Image src='/typescript.svg' width={30} height={30} alt='css'/>
        </div> */}
    </div>
    </div>
  )
}

export default Skills