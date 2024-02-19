import Image from 'next/image'
import React from 'react'
import mission1 from '../../public/assets/mission1.jpg'
import mission2 from '../../public/assets/mission2.jpg'
import mission3 from '../../public/assets/mission3.jpg'
import mission4 from '../../public/assets/mission4.jpg'

import missionmiddle from '../../public/assets/missionmiddle.jpg'
import AbLanPTag from './AbLanPTag'


const AbLanding = () => {
  return (
    <>
        <div>
            
            <div className='max-w-[1400px] mx-auto py-12 md:pb-2 relative z-10'>
                <h2 className='font-bold text-4xl lg:text-3xl md:text-2xl  text-center text-primary'>Our Mission</h2>
                <p className='font-bold text-sm py-6 text-center max-w-[800px] m-auto leading-6'>At <span className='text-primary'>J Logistics</span>,
                 we do not just move goods; <span className='text-primary'>we connect continents and deliver dreams</span>. Our vision is rooted in the 
                 belief that seamless logistics can transform aspirations into reality. We take pride in being the bridge that brings your products to the 
                 world and turns your dreams into tangible successes.</p>

                 <Image src={missionmiddle} alt='' className='w-[80%] mx-auto h-auto rounded-lg md:block hidden'/>
                

                <div className='w-[80%] flex gap-4 mx-auto items-center md:hidden'>
                    <div className='flex flex-col items-end w-[36%] gap-4'>
                        
                        <Image src={mission1} alt='' className='h-auto w-[60%] rounded-lg' />
                        
                        <Image src={mission2} alt='' className='h-auto w-[100%] rounded-lg'/>
                        
                    </div>

                    
                    <Image src={missionmiddle} alt='' className='w-[28%] h-auto rounded-lg'/>

                    
                    <div className='flex flex-col items-start w-[36%] gap-4'>
                        
                        <Image src={mission3} alt='' className='h-auto w-[100%] rounded-lg'/>
                        
                        <Image src={mission4} alt='' className='h-auto w-[60%] rounded-lg'/>
                       
                    </div>
                </div>
            </div>
        </div>



        <div>
            <div className='max-w-[1400px] mx-auto py-16 flex md:flex-col gap-6 relative z-10'>
                <h2 className='w-[45%] md:w-[100%] font-bold text-3xl lg:text-2xl md:text-xl  text-center'>
                  What is Our <span className=' text-primary'>Brand Anthem</span>  ?
                </h2>
                <div className='w-[55%] md:w-[100%] flex flex-col gap-6'>
                    <AbLanPTag>&quot;Connecting Continents, Delivering Dreams&quot; 
                    is not just a slogan; it encapsulates our commitment to making the world a smaller place by facilitating global
                     trade and making your dreams of international business a reality.</AbLanPTag>
                    

                    
                    <AbLanPTag>Get Ready to Soar As we step into the future, J Logistics invites you to join us on this
                    exciting journey. Whether you are a seasoned importer/exporter or a budding entrepreneur, we have the solutions to elevate your logistics
                    experience.</AbLanPTag>
                    <AbLanPTag>Let&apos;s connect continents and deliver dreams together. to explore 
                    the world of reliable, fast, and cost-effec􀆟ve logistics with J Logistics.</AbLanPTag>
                </div>
            </div>
        </div>
    </>
  )
}

export default AbLanding