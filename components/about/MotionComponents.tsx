"useClient"

import React, { ReactNode, useEffect, useRef } from 'react'
import {motion, useInView, useMotionValue, useSpring} from 'framer-motion'
import Link from 'next/link'
import styles from '../navbar/navbar.module.css'
import { useRouter } from 'next/router'


interface YouCanis {
    children:ReactNode
}

export const YouCan:React.FC<YouCanis> = ({children}) => {
  return (
    <>
        <motion.div 
        initial={{y:40}}
        whileInView={{y:0}}
        transition={{duration:1}}
        className='flex flex-col gap-2 w-[50%] md:w-[100%]'>
            {children}
        </motion.div>
    </>
  )
}


interface AnimateNumberProps {
    value: number;
  }

export const AnimateNumber: React.FC<AnimateNumberProps>=({ value })=>{

    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const spring = useSpring(motionValue , {duration:3000})
    const inView = useInView(ref)

    useEffect(() => {
      if(inView){
        motionValue.set(value)
      }
    }, [motionValue, inView , value])

    useEffect(()=>{
        spring.on("change" , (latest)=>{
            if (ref.current && latest.toFixed(0) <= value) {
                (ref.current as HTMLElement).textContent = latest.toFixed(0);
            }
              
        })
    },[spring, value ])

    return(
        <>
            <span ref={ref}></span>
        </>
    )

}

interface AnimatingDivType {
  children : ReactNode;
}


export const AnimatingDiv:React.FC<AnimatingDivType> =({children})=>{
    return(
      <motion.div initial={{y:40 , opacity:.5}} whileInView={{y:0, opacity:1}} transition={{duration:.6}} className=''>{children}</motion.div>
    )
}


export const BlogNavEle = ()=>{
  interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
  }

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
    const router = useRouter();
  
    return (
      <div className={`p-2 text-xs font-semibold rounded-xl border-solid border-2 ${router.asPath === href ? 'bg-primaryDark text-white' : ' text-black bg-white border-primaryDark'}`} onClick={() => router.push(href)}>
        <a href={href}>
          {children}
        </a>
        
        
      </div>
    );
  };
  return(
    <>
      <div className={`flex gap-2 sticky z-20 top-24 sm:flex-col sm:items-center ${styles.glass}`}>
        <div className='flex gap-2'>
          <CustomLink href="/blog" >Blog</CustomLink>
          <CustomLink href="/freightForwarding" >Forwarding</CustomLink>
          <CustomLink href="/clearance">Clearance</CustomLink>
        </div>
        <div className='flex gap-2'>
          <CustomLink href="/warehouse">WareHouse</CustomLink>
          <CustomLink href="/entrepreneurs">Entrepreneurs</CustomLink>
          <CustomLink href="/delivering">Delivering</CustomLink>
        </div>
        
       
      </div>
    </>
  )
}


  