import React from 'react'
import Image from 'next/image'
import BillingSystem from '../public/Billing_System.png'
import ImageGenerator from '../public/Image_Generator.png'
import Portfolio from '../public/Portfolio_Img.png'
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion';

const Projects = () => {
  const {ref,inView}=useInView({
    threshold:0.2 
  });
  const animation =useAnimation();

  useEffect(()=>{
    console.log(inView)
    if(inView){
      animation.start({
        x:0,
        type:'spring' ,duration:2 ,bounce:0.3 ,
      })
    }
    if(!inView){
      animation.start({
        x:'-100vw'
      })
    }
  },[inView,animation])

  
  return (
    <div ref={ref} h-full id='projects' className=' p-5 text-center bg-[#202020]'>
      <spanc className='text-2xl text-orange-500'>Projects</spanc>
      <div className='flex p-5 text-center justify-around flex-wrap'>
      <motion.div className='bg-black p-3 m-2 rounded-md' animate={animation} transition={{ease:"easeOut" , duration:1}}>
        <Image src={BillingSystem} alt='bill image' className='rounded-md' width={300} height={500} placeholder='blur' quality={80} />
        <h3 className='text-xl p-1'>Billing-System</h3>
        <div className='flex justify-center p-2'>
        <a href='https://github.com/Rithickg/Billing_System' target='_blank' rel="noreferrer noopener">
        <h5 className='bg-orange-500 text-base text-black font-semibold p-1 m-1 rounded'>View Code</h5>
        </a>
        <a href='https://billing-system-client-rithickg.vercel.app/' target='_blank' rel="noreferrer noopener">
        <h5 className='bg-orange-500 text-base text-black font-semibold p-1 m-1 rounded '>Demo</h5>
        </a>
        </div>
      </motion.div>
      <motion.div className='bg-black p-3 m-2 rounded-md' animate={animation} transition={{ease:"easeOut" , duration:1}}>
      <Image src={ImageGenerator} alt='image generator' className='rounded-md' width={300} height={500} placeholder='blur' quality={80} />
        <h3 className='text-xl p-1'>Image-Generator</h3>
        <div className='flex justify-center p-2'>
        <a href='https://github.com/Rithickg/openai_image_generator' target='_blank' rel="noreferrer noopener">
        <h5 className='bg-orange-500 text-black font-semibold p-1 m-1 rounded'>View Code</h5>
        </a>
        <a href='https://openai-image-generator-client.vercel.app/' target='_blank' rel="noreferrer noopener">
        <h5 className='bg-orange-500 text-base text-black font-semibold p-1 m-1 rounded '>Demo</h5>
        </a>
        </div>
      </motion.div>
      <motion.div className='bg-black p-3 m-2 rounded-md' animate={animation} transition={{ease:"easeOut" , duration:1}}>
      <Image src={Portfolio} alt='portfolio' className='rounded-md' width={300} height={500} placeholder='blur' quality={80} />
        <h3 className='text-xl p-1'>Portfolio</h3>
        <div className='flex justify-center p-2'>
        <a href='https://github.com/Rithickg/portfolio-nextjs' target='_blank' rel="noreferrer noopener">
        <h5 className='bg-orange-500 text-base text-black font-semibold p-1 m-1 rounded'>View Code</h5>
        </a>
        <a href='https://portfolio-nextjs-rithickg.vercel.app/' target='_blank' rel="noreferrer noopener">
        <h5 className='bg-orange-500 text-base text-black font-semibold p-1 m-1 rounded '>Demo</h5>
        </a>
        </div>
      </motion.div>
    </div>
    </div>
  )
}

export default Projects