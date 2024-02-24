import Image from 'next/image'
import React from 'react'
import blogmain from '../../public/assets/blogmain.jpg'
import sustainable from '../../public/assets/sustainable.webp'
import casestudy from '../../public/assets/casestudy.webp'
import navigation from '../../public/assets/navigation.jpeg'
import ocean from '../../public/assets/ocean.png'
import air from '../../public/assets/air.png'
import breakbulk from '../../public/assets/breakbulk.png'
import warhouse from '../../public/assets/warhouse.png'
import multi from '../../public/assets/multi.png'
import Link from 'next/link'

const BlogLanding = () => {
  return (
    <>
        <div className='max-w-[1200px] mx-auto px-6'>
            <div className='flex gap-5 py-6 w-[100%] md:flex-col items-center'>
                <Image src={blogmain} alt='' className='w-[40%] h-auto md:w-[90%] sm:w-[100%] rounded-lg'/>
                <div className='flex w-[50%] lg:w-[60%] md:w-[100%] gap-5 flex-col'>
                    <h1 className='text-6xl font-bold md:text-4xl md:text-center '>Latest Insight & News</h1>
                    <h5 className='text-base font-bold'>Stay Updated with J Logestics News , Updates and Insight</h5>
                    <button className='py-1 px-2 bg-white border-solid border-2 border-primary font-bold rounded-lg hover:bg-primary hover:text-white w-32'><a href="#blogs">Read More</a></button>
                </div>
            </div>
            <div className='w-[100%] '>
                <h2 className='py-2 text-3xl font-bold pt-4'>Featured Articles</h2>
                <div className='w-[100%] flex justify-start gap-4 md:flex-col'>
                    <div className='w-[30%] flex flex-col gap-2 lg:w-[33%] md:w-[100%]'>
                        <Image src={sustainable} alt='' className='w-[100%] rounded-lg'/>
                        <h4 className='text-lg font-bold'>Sustainable Logistics: Green Initiatives in Freight Transportation</h4>
                        <p className='text-primaryDark text-xs font-normal'>Highlight your company&apos;s commitment to sustainability, covering eco-friendly practices in various modes of transportation and warehouse operations.</p>
                    </div>
                    <div className='w-[30%] flex flex-col gap-2 lg:w-[33%] md:w-[100%]'>
                        <Image src={navigation} alt='' className='w-[100%] rounded-lg'/>
                        <h4 className='text-lg font-bold'>Navigating Customs: A Guide to Hassle-Free International Shipping</h4>
                        <p className='text-primaryDark text-xs font-normal'>Offer insights into customs clearance processes, documentation requirements, and how your logistics services streamline the international shipping process.</p>
                    </div>
                    <div className='w-[30%] flex flex-col gap-2 lg:w-[33%] md:w-[100%]'>
                        <Image src={casestudy} alt='' className='w-[100%] rounded-lg'/>
                        <h4 className='text-lg font-bold'>Case Studies in Logistics: Overcoming Challenges and Delivering Success</h4>
                        <p className='text-primaryDark text-xs font-normal'>Share real-life examples of challenging logistics situations your company successfully managed, showcasing problem-solving skills and expertise.</p>
                    </div>
                    
                </div>
            </div>
            <div className='pt-20 w-[100%]' id='blogs'>
                <h1 className='text-3xl font-bold pb-8'>Blog</h1>
                <div className='flex w-[100%] gap-4 md:flex-col'>
                    <div className='w-[40%] md:w-[100%] gap-4 flex xs:flex-col xs:items-center pb-9'>
                        <Link href="/freightForwarding" className='w-[50%] flex flex-col gap-2 xs:w-[90%] xs:items-center'>
                            <Image src={ocean} alt='' className='w-[100%] h-[130px] xs:h-[160px] rounded-lg'/>
                            <h3 className='text-sm font-semibold'>Simplifying Freight Forwarding</h3>
                            <p  className='self-end text-xs text-primary'>Read more</p>
                        </Link>
                        <Link href="/clearance" className='w-[50%] flex flex-col gap-2 xs:w-[90%] '>
                            <Image src={air} alt='' className='w-[100%] h-[130px] xs:h-[160px] rounded-lg'/>
                            <h3 className='text-sm font-semibold'>Navigating the World of Customs Clearance</h3>
                            <p className='self-end text-xs text-primary'>Read more</p>
                        </Link>
                    </div>
                    
                    <div className='w-[40%] md:w-[100%] gap-4 flex xs:flex-col xs:items-center'>
                        <Link href="/warehouse" className='w-[50%] flex flex-col gap-2 xs:w-[90%]'>
                            <Image src={breakbulk} alt='' className='w-[100%] h-[130px] xs:h-[160px] rounded-lg'/>
                            <h3 className='text-sm font-semibold'>The World of Warehousing</h3>
                            <p className='self-end text-xs text-primary'>Read more</p>
                        </Link>
                        <Link href="/entrepreneurs" className='w-[50%] flex flex-col gap-2 xs:w-[90%]'>
                            <Image src={warhouse} alt='' className='w-[100%] h-[130px] xs:h-[160px] rounded-lg'/>
                            <h3 className='text-sm font-semibold'>The Entrepreneurial Journey</h3>
                            <p className='self-end text-xs text-primary'>Read more</p>
                        </Link>
                    </div>
                    
                    <Link href="/freightForwarding" className='w-[20%]  md:w-[50%] flex flex-col gap-2 xs:w-[90%] xs:self-center'>
                        <Image src={multi} alt='' className='w-[100%] h-[130px] xs:h-[160px] rounded-lg'/>
                        <h3 className='text-sm font-semibold'>Delivering logistic services</h3>
                        <p className='self-end text-xs text-primary'>Read more</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogLanding