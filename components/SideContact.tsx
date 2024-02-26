import React, { useState } from 'react'
import whatsapp from '../public/assets/whatsapp.png'
import gmail from '../public/assets/gmail.png'
import telephone from '../public/assets/telephone.png'
import close from '../public/assets/close.png'
import Image from 'next/image'

const SideContact = () => {

    const [open, setOpen]= useState<boolean>(false)

    const openFunc =()=>{
        setOpen(true)
    }
    const closeFunc =()=>{
        setOpen(false)
    }
  return (
    <>
        <div className='fixed bottom-14 right-5'>
           {!open? <div className='rounded-full text-xs h-10 w-10 bg-primary text-white flex items-center justify-center cursor-pointer' onClick={openFunc}> Cont </div>
           :<div className='flex flex-col gap-2' >
            <a  href="tel:9176202876" target='_blank'><Image src={telephone} alt='' className='w-6 h-6'/></a>
            <a  href="mailto:ebinjacob@jlogistics.in" target='_blank'><Image src={gmail} alt='' className='w-6 h-6'/></a>
            <a  href="https://wa.me/9176202876" target='_blank'><Image src={whatsapp} alt='' className='w-6 h-6'/></a>
            <div className='w-6 h-6 flex items-center justify-center cursor-pointer' onClick={closeFunc}><Image src={close} alt='' className='w-4 h-4'/></div>
           </div>} 
            
            
        </div>
    </>
  )
}

export default SideContact