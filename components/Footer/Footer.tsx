import React, { FC, SVGProps } from 'react';
import whatsapp from '../../public/assets/whatsapp.png'
import gmail from '../../public/assets/gmail.png'
import telephone from '../../public/assets/telephone.png'
import Image from 'next/image';


const SvgComponent: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='w-[100%] h-auto' {...props}>
    <path
      fill="#122c52"
      d="m0 96 48 16c48 16 144 48 240 58.7 96 10.3 192 .3 288-21.4C672 128 768 96 864 96s192 32 288 32 192-32 240-48l48-16v256H0Z"
    />
  </svg>
);



const Footer = () => {
  return (
    <div className='w-screen '>
        <div className='relative -bottom-20 lg:-bottom-10 md:-bottom-6 sm:bottom-0 xs:-bottom-2 w-[100%] z-0'>
          <SvgComponent/>
        </div>
        <div className='w-screen bg-dark  text-white relative '>
            
            
            <div className='max-w-[1400px] mx-auto px-6 py-8 relative z-10 flex gap-3 sm:flex-col'>
              <div className='w-[25%] flex flex-col gap-3 md:w-[45%] sm:w-[100%]'>
                <h3 className='text-base font-bold sm:text-sm'>Our Vision</h3>
                <p className='text-base sm:text-sm'>we don&apos;t just move goods; <span className='text-primaryDark font-bold'>we connect continents and deliver dreams.</span> </p>
              </div>
              <div className='w-[40%] flex flex-col gap-3 md:hidden'>
                <h3 className='text-base font-bold text-center'>We are doing shipments in </h3>
                <div className='w-[100%] gap-2 flex text-slate-300'>
                  <div className='w-[50%]  flex flex-col gap-2 px-6'>
                    <p className='text-xs'>Singapore</p>
                    <p className='text-xs'>Shanghai, China</p>
                    <p className='text-xs'>Ningbo-Zhoushan, China</p>
                    <p className='text-xs'>Shenzhen, China</p>
                    <p className='text-xs'>Guangzhou , China</p>
                    <p className='text-xs'>Busan, South Korea</p>
                    <p className='text-xs'>Qingdao, China</p>
                    <p className='text-xs'>Hong Kong, China</p>
                    <p className='text-xs'>Tianjin, China</p>
                    <p className='text-xs'>Jebel Ali, Dubai</p>
                    <p className='text-xs'> Xiamen, China</p>
                    
                  </div>
                  <div className='w-[50%]  flex flex-col gap-2 px-6'>
                    
                    <p className='text-xs'>Laem Chabang, Thailand</p>
                    <p className='text-xs'>Tanjung Priok, Indonesia</p>
                    <p className='text-xs'>Colombo, Sri Lanka</p>
                    <p className='text-xs'>Ho Chi Minh City, Vietnam</p>
                    <p className='text-xs'>Suzhou, China</p>
                    <p className='text-xs'>Hai Phong, Vietnam</p>
                    <p className='text-xs'>Mundra, India</p>
                    <p className='text-xs'>Foshan, China</p>
                    <p className='text-xs'>Jeddah, Saudi Arabia</p>
                    <p className='text-xs'>Cai Mep, Vietnam</p>
                    <p className='text-xs'>Cai Mep, Vietnam</p> 
                  </div>
                </div>
                
              </div>
              <div className='w-[35%] flex flex-col gap-4 md:w-[55%] sm:w-[100%]'>
                <h3 className='text-lg sm:text-base font-bold'>Contact Details</h3>
                
                <div className='flex flex-col gap-1'>
                  <h3 className='text-base sm:text-sm font-semibold'>Social Media</h3>
                  <div className='flex gap-3'>
                    <a href="https://wa.me/9176202876" target='_blank'>
                      <Image src={whatsapp} alt='' className='w-6 h-6'/>
                    </a>
                    <a href="mailto:ebinjacob@jlogistics.in" target='_blank'>
                      <Image src={gmail} alt='' className='w-6 h-6'/>
                    </a>
                   
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-base sm:text-sm font-semibold'>Address</h3>
                  <p className='text-sm sm:text-xs font-medium'>No.36/239,Mannady, Chennai-600 001.</p>
                  <h3 className='text-base sm:text-sm font-semibold pt-3'>Phone Number</h3>
                  <p className='text-sm sm:text-xs font-medium flex gap-1 items-center'>
                     <a href="tel:9176202876"> <Image src={telephone} alt='' className='w-6 h-6'/></a> 
                     <a href="tel:9176202876">+91 9176202876</a>
                  </p>
                  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer