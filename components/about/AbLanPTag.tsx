"useClient"
import {motion} from 'framer-motion'

import React , { ReactNode }from 'react'

interface AbLanPTagProps {
    children: ReactNode;
  }

const AbLanPTag:React.FC<AbLanPTagProps> = ({children}) => {
  return (
    <>
        <motion.p initial={{y:50, opacity:.4}} whileInView={{y:0 , opacity:1}} transition={{duration:.5}} className='text-sm font-semibold leading-6'>{children}</motion.p>
    </>
  )
}

export default AbLanPTag