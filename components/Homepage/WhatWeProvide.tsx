import Image from 'next/image'
import React from 'react'
import reliability from '../../public/assets/reliability.png'
import speed from '../../public/assets/speed.png'
import costeffective from '../../public/assets/calculator.png'
import {motion} from 'framer-motion'

const WhatWeProvide = () => {
  return (
    <>
       <div className='max-w-[1400px] m-auto py-16 px-6'>
            <div>
                <div className='font-bold text-4xl lg:text-3xl md:text-2xl  text-center'>What <span className='text-primary'>Sets Us</span> Apart</div>
                <div className='font-bold text-sm py-6 text-center max-w-[800px] m-auto'>With a legacy of <span className='text-primary'>3 years</span> in the industry, we are embarking on the next phase of our journey to redefine logistics solutions.</div>

                <div className='flex w-[100%] py-12 gap-2 lg:flex-col'>
                  <motion.div initial={{x:-60 , opacity:.3}} whileInView={{x:0 , opacity:1}} transition={{duration:1 }} className='w-[33%] lg:w-[100%] py-6 pl-6 pr-14 rounded-tr-full rounded-br-full lg:rounded-tr-3xl lg:rounded-br-3xl flex flex-col gap-4 bg-gradient-to-r from-gradient-start to-gradient-end'>
                    <Image src={reliability} alt='' className='self-center w-8 h-8'/>
                    <h4 className='text-center font-bold text-base '>Reliability</h4>
                    <p className='font-semibold text-sm'>We understand that trust forms the foundation of any successful partnership. J Logistics is commited to reliability at every step. Our experienced team ensures that your cargo arrives safely and on time, every time.</p>
                  </motion.div>
                  <div className='w-[33%] lg:w-[100%] py-6 px-10 flex flex-col gap-4 '>
                    <Image src={speed} alt='' className='self-center w-8 h-8'/>
                    <h4 className='text-center font-bold text-base '>Speed</h4>
                    <p className='font-semibold text-sm'>In the fast-paced world of logistics, time is of the essence. Our streamlined processes and advanced technology enable us to provide swi􀅌 and efficient services, ensuring that your cargo reaches its destination without delays.</p>
                  </div>
                  <motion.div initial={{x:60 , opacity:.3}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} className='w-[33%] lg:w-[100%] py-6 pr-6 pl-14 rounded-tl-full rounded-bl-full lg:rounded-tl-3xl lg:rounded-bl-3xl flex flex-col gap-4 bg-gradient-to-l from-gradient-start to-gradient-end'>
                    <Image src={costeffective} alt='' className='self-center w-8 h-8'/>
                    <h4 className='text-center font-bold text-base '>Cost-Effectiveness</h4>
                    <p className='font-semibold text-sm'>We believe that excellence shouldnot come at a premium. J Logistics is dedicated to providing cost-effective solutions without compromising on the quality of service. We optimize routes, utilize resources efficiently, and always strive to offer the best value for your investment.</p>
                  </motion.div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default WhatWeProvide