import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='my-5 flex justify-around text-center flex-wrap'>
        <div className=''>
        <Image src='/html-1.svg' width={100} height={100} alt='html'/>
        <h3>HTML</h3>
        </div>
        <div>
        <Image src='/css-3.svg' width={100} height={100} alt='css'/>
        <h3>CSS</h3>
        </div>
        <div>
        <Image src='/logo-javascript.svg' width={100} height={100} alt='javascript'/>
        <h3>JavaScript</h3>
        </div>
        <div>
        <Image src='/tailwind-css-1.svg' width={100} height={100} alt='tailwindcss'/>
        <h3>TailwindCss</h3>
        </div>
        <div>
        <Image src='/react-2.svg' width={100} height={100} alt='reactjs'/>
        <h3>ReactJs</h3>
        </div>
        <div>
        <Image src='/nodejs-1.svg' width={100} height={100} alt='nodejs'/>
        <h3>NodeJs</h3>
        </div>
        <div>
        <Image src='/express-109.svg' width={100} height={100} alt='expressjs'/>
        <h3>ExpressJs</h3>
        </div>
        <div>
        <Image src='/mongodb-icon-1.svg' width={100} height={100} alt='mongodb'/>
        <h3>MongoDB</h3>
        </div>
        <div>
        <Image src='/nextjs-2.svg' width={100} height={100} alt='nextjs'/>
        <h3>NextJs</h3>
        </div>
        {/* <div>
        <Image src='/sass-1.svg' width={30} height={30} alt='css'/>
        </div>
        <div>
        <Image src='/typescript.svg' width={30} height={30} alt='css'/>
        </div> */}
    </div>
  )
}

export default Skills