import React from 'react'
import Image from 'next/image'
import billImg from '../public/adem-ay-zs-41Br0WhQ-unsplash.jpg'
import blogImg from '../public/chanhee-lee-vkvHBK8n_gs-unsplash.jpg'
import chatImg from '../public/kenny-eliason-3GZNPBLImWc-unsplash.jpg'

const Projects = () => {
  return (
    <div className='flex justify-around flex-wrap'>
      <div>
        <Image src={billImg} alt='bill image' className='rounded-md' width={300} height={300} placeholder='blur' quality={80} />
        <h3>Billing-System</h3>
        <h5>view code :-</h5>
      </div>
      <div>
        <Image src={blogImg} alt='blog image' className='rounded-md' width={300} height={300} placeholder='blur' quality={80} />
        <h3>Blog-Website</h3>
        <h5>view code :-</h5>

      </div>
      <div>
        <Image src={chatImg} alt='chat image' className='rounded-md' width={300} height={300} placeholder='blur' quality={80} />
        <h3>Chat-Application</h3>
        <h5>view code :-</h5>
      </div>
    </div>
  )
}

export default Projects