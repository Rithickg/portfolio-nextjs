import React from 'react'
import {AiOutlineInstagram,AiOutlineLinkedin,AiFillTwitterCircle,AiOutlineGithub,AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'


const Contact = () => {
  return (
    <div id='contact' className='flex flex-col justify-center '>
      <div className='flex justify-center flex-wrap'>
        <h3>
        Email:rithickg567@gmail.com
        </h3>
        <h3>
        whatsapp:8056215840
        </h3>
      </div>
      <div className='flex justify-center'>
        <AiOutlineInstagram/>
        <AiOutlineLinkedin/>
        <AiFillTwitterCircle/>
      </div>
      <div className='flex justify-center'>
        <AiOutlineGithub/>
        <AiOutlineMail/>
        <AiOutlineWhatsApp/>
      </div>
      <div className='flex justify-center flex-wrap'>
        <span>Designed and developed by Rithick </span>
        </div>
    </div>
  )
}

export default Contact