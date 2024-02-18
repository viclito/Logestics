"useClient"

import React, { Children, ReactNode, useEffect, useRef } from 'react'
import {motion, useInView, useMotionValue, useSpring} from 'framer-motion'


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
    Children:ReactNode;
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


  