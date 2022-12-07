import React from 'react'
import {AiOutlineMail,AiFillPhone,AiOutlineInstagram,AiOutlineLinkedin,AiFillTwitterCircle,AiOutlineGithub,AiOutlineWhatsApp} from 'react-icons/ai'


const Contact = () => {
  return (
    <div id='contact' className='flex p-2 flex-col justify-center '>
      <div className='flex flex-col sm:flex-row justify-evenly '>
      <div className='flex justify-center flex-col flex-wrap text-center'>
       <span className='text-xl text-orange-500'>Contact</span>
        <div className='flex p-2 justify-center'>
          <AiOutlineMail className='w-8 h-8 text-orange-500 bg-white rounded-full p-1' />
          <span className='p-2'>rithickg567@gmail</span> 
        </div>
        <div className='flex p-2 justify-center'>
         <AiFillPhone className='w-8 h-8 text-orange-500 bg-white rounded-full p-1'/>
         <span className='p-2'>+918056215840</span> 
        </div>
      </div>
      <div className='p-2 justify-center text-center'>
        <span className='text-xl text-orange-500'>Socials</span>
      <div className='flex justify-center p-2'>
        <a href='https://www.instagram.com/rithick.28/' target='_blank' rel="noreferrer noopener">
        <AiOutlineInstagram className='w-8 h-8 m-1'/>
        </a>
        <a href='https://www.linkedin.com/in/rithick-g-b972aa213/' target='_blank' rel="noreferrer noopener">
        <AiOutlineLinkedin className='w-8 h-8 m-1'/>
        </a>
        <a href='https://twitter.com/' target='_blank' rel="noreferrer noopener">
        <AiFillTwitterCircle className='w-8 h-8 m-1'/>
        </a>
      </div>
      <div className='flex justify-center p-2'>
        <a href='https://github.com/Rithickg' target='_blank' rel="noreferrer noopener">
        <AiOutlineGithub className='w-8 h-8 m-1'/>
        </a>
        <a href='mailto:rithickg567@gmail.com'>
        <AiOutlineMail className='w-8 h-8 m-1'/>
        </a>
        <a href='https://wa.me/918056215840?text=Hi' target='_blank' rel="noreferrer noopener">
        <AiOutlineWhatsApp className='w-8 h-8 m-1'/>
        </a>
      </div>
      </div>
      </div>
      <div className='flex justify-center flex-wrap text-lg'>
        <span>Designed and developed by <span className='text-red-600'>❤</span> Rithick </span>
        </div>
    </div>
  )
}

export default Contact