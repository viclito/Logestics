import Image from 'next/image'
import React, { useState } from 'react'
import landing from '../../public/assets/png2.jpg'
import styles from '../navbar/navbar.module.css'
import whatsapp from '../../public/assets/whatsapp.png'
import gmail from '../../public/assets/gmail.png'
import toppng from '../../public/assets/toppng.png'
import telephone from '../../public/assets/telephone.png'
import { motion } from "framer-motion"

const Landingpage = () => {

    const [contact , setContact]=useState<boolean>(false)
    const showContact = ()=>{
        setContact(!contact)
    }
  return (
    <div className='relative'>
        <Image src={toppng} alt='' className='absolute z-0 top-0 left-0 w-[60%] h-auto'/>
        <div className='max-w-[1400px] m-auto py-14 relative'>
            <h4 className='capitalize font-medium text-6xl lg:text-5xl md:text-3xl absolute lg:relative text-start pl-6 leading-normal lg:text-center'>flexible <span className='font-bold'><span className='text-primary'>LOGISTICS</span> <br /> & CARGO </span> Services</h4>
            <div className='w-[100%] flex p-7 items-center lg:flex-col'>
                {/* right */}
                
                <div className='w-[40%] lg:w-[90%] md:w-[100%] relative'>
                    <h2 className='text-2xl text-slate-400 font-medium pt-4'>Deliver Packages through</h2>
                    <h3 className='text-base font-medium py-4'>We are well-equipped to offer comprehensive logistical support, encompassing ship and flight services, break bulk handling, warehouse management, and efficient multimodal transport solutions.</h3>
                    <button
                    onClick={showContact}
                     className='py-1 px-2 bg-white border-solid border-2 border-primary font-bold rounded-lg hover:bg-primary hover:text-white'>for Consultation</button>
                    
                        <div className={`absolute flex -bottom-10 left-20 px-2 xs:px-0 py-1 duration-300 transition-all gap-4 ${styles.glass} ${contact ? 'opacity-100 w-[120px]' : 'opacity-0 w-0'}`} >
                            <motion.a initial={{scale:1 , y:0}} whileTap={{scale:.9}} whileHover={{y:-1}} href="tel:9176202876" target='_blank'><Image src={telephone} alt='' className='w-6 h-6'/></motion.a>
                            <motion.a initial={{scale:1 , y:0}} whileTap={{scale:.9}} whileHover={{y:-1}} href="mailto:ebinjacob@jlogistics.in" target='_blank'><Image src={gmail} alt='' className='w-6 h-6'/></motion.a>
                            <motion.a initial={{scale:1 , y:0}} whileTap={{scale:.9}} whileHover={{y:-1}} href="https://wa.me/9176202876" target='_blank'><Image src={whatsapp} alt='' className='w-6 h-6'/></motion.a>
                            
                        </div>
                    
                </div>

                {/* left */}

                <div className='w-[60%] py-10 xl:py-20 lg:py-5 sm:w-[90%]'>
                    <Image src={landing} alt='' className='w-[100%] h-auto'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Landingpage