import React from 'react'
import Image from 'next/image'
import billImg from '../public/adem-ay-zs-41Br0WhQ-unsplash.jpg'
import blogImg from '../public/chanhee-lee-vkvHBK8n_gs-unsplash.jpg'
import chatImg from '../public/kenny-eliason-3GZNPBLImWc-unsplash.jpg'
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
        type:'spring' ,duration:2 ,bounce:0.3 
      })
    }
    if(!inView){
      animation.start({
        x:'-100vw'
      })
    }
  },[inView,animation])

  
  return (
    <div ref={ref} h-full id='projects' className='flex justify-around flex-wrap bg-[#202020]'>
      <motion.div animate={animation}>
        <Image src={billImg} alt='bill image' className='rounded-md' width={300} height={300} placeholder='blur' quality={80} />
        <h3>Billing-System</h3>
        <h5>view code :-</h5>
      </motion.div>
      <motion.div animate={animation}>
        <Image src={blogImg} alt='blog image' className='rounded-md' width={300} height={300} placeholder='blur' quality={80} />
        <h3>Blog-Website</h3>
        <h5>view code :-</h5>
      </motion.div>
      <motion.div animate={animation} >
        <Image src={chatImg} alt='chat image' className='rounded-md' width={300} height={300} placeholder='blur' quality={80} />
        <h3>Chat-Application</h3>
        <h5>view code :-</h5>
      </motion.div>
    </div>
  )
}

export default Projects