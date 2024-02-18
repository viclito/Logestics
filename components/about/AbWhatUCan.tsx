import React from 'react'
import transport from '../../public/assets/transport.png'
import warehouse from '../../public/assets/warehouse.png'
import inventory from '../../public/assets/inventory.png'
import information from '../../public/assets/information.png'
import supplyChain from '../../public/assets/supply-chain.png'
import { AnimateNumber, YouCan } from './MotionComponents'
import Image from 'next/image'

const AbWhatUCan = () => {
  return (
    <>
        <div className='max-w-[1200px] mx-auto py-12 md:py-2'>
            <h2 className='font-bold text-4xl lg:text-3xl md:text-2xl  text-start md:text-center py-6 pb-10'>With J Logesticts , <span className='text-primary'>U can</span> </h2>

            <div className='flex flex-col gap-8 max-w-[1200px] mx-auto'>
                <div className='flex gap-8 w-[100%] md:flex-col'>
                    <YouCan>
                        <Image src={transport} alt='' className='w-10 h-10'/>
                        <h3 className='text-xl font-bold'>Transport</h3>
                        <p className='text-sm font-semibold'>The movement of goods is the foundation of logistics. Whether by road, air, sea, 
                        or rail, selecting the appropriate mode of transportation is crucial for timely deliveries and cost-effectiveness.</p>
                    </YouCan>
                    <YouCan>
                        <Image src={warehouse} alt='' className='w-10 h-10'/>
                        <h3 className='text-xl font-bold'>WareHouse</h3>
                        <p className='text-sm font-semibold'>Warehouses serve as temporary storage hubs, allowing businesses to store inventory 
                        and manage fluctuations in demand. An effective warehouse layout and inventory management system can significantly improve 
                        logistics efficiency.</p>
                    </YouCan>
                </div>
                
                <div className='flex gap-8 w-[100%] md:flex-col'>
                    <YouCan>
                        <Image src={inventory} alt='' className='w-10 h-10'/>
                        <h3 className='text-xl font-bold'>Inventory Management</h3>
                        <p className='text-sm font-semibold'>Maintaining optimal inventory levels is a delicate balancing act. Excess inventory 
                        ties up capital, while inadequate stock leads to stockouts. Advanced inventory management systems and just-in-time (JIT) 
                        practices can help strike the right balance.</p>
                    </YouCan>
                    <YouCan>
                        <Image src={information} alt='' className='w-10 h-10'/>
                        <h3 className='text-xl font-bold'>Information Technology</h3>
                        <p className='text-sm font-semibold'>In today&apos;s digital age, logistics heavily relies on sophisticated software and 
                        data analytics. Supply chain management systems enable real-time tracking, route optimization, and demand forecasting.</p>
                    </YouCan>
                </div>

                <YouCan>
                    <Image src={supplyChain} alt='' className='w-10 h-10'/>
                    <h3 className='text-xl font-bold'>Supply chain PartnerShip</h3>
                    <p className='text-sm font-semibold'>Collaborating with reliable partners, such as carriers, suppliers, and distributors, 
                    fosters trust and enhances the overall efficiency of logistics operations.</p>
                </YouCan>
            </div>
            
        </div>
        <div className='max-w-[1200px] mx-auto py-32'>
            <div className='flex flex-col gap-28 w-[100%]'>
                <div className='flex w-[100%]'>
                    <div className='flex flex-col gap-1 w-[33%] items-center'>
                        <h1 className='font-bold text-6xl md:text-4xl sm:text-3xl text-primary'><AnimateNumber value={2021}/></h1>
                        <p className='font-semibold md:text-xs'>Founded</p>
                    </div>
                    <div className='flex flex-col gap-1 w-[33%] items-center'>
                    <h1 className='font-bold text-6xl md:text-4xl sm:text-3xl text-primary'><AnimateNumber value={3}/>+</h1>
                        <p className='font-semibold md:text-xs'>Years</p>
                    </div>
                    <div className='flex flex-col gap-1 w-[33%] items-center'>
                        <h1 className='font-bold text-6xl md:text-4xl sm:text-3xl text-primary'><AnimateNumber value={3000}/>+</h1>
                        <p className='font-semibold md:text-xs'>Likes</p>
                    </div>
                </div>
                <div className='flex w-[100%]'>
                    <div className='flex flex-col gap-1 w-[33%] items-center'>
                        <h1 className='font-bold text-6xl md:text-4xl sm:text-3xl text-primary'><AnimateNumber value={200}/>+</h1>
                        <p className='font-semibold md:text-xs'>Happy Customers</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default AbWhatUCan