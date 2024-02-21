import Image from 'next/image'
import React from 'react'
import map from '../../public/assets/Frame2.png'

const Map = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
        <h2 className='font-bold text-4xl lg:text-3xl md:text-2xl py-4 text-center '>Doing shipments throughout <span className='text-primary'>WorldWide</span></h2>
        <Image src={map} alt='' className='w-[90%] mx-auto'/>
    </div>
  )
}

export default Map