'use client'

import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  const varients = {
    varient1: {
      x: 400, y: 300, opacity: 0.5
    },
    varient2: {
      x: 100, y: -300, rotaion: 90
    },
  }


  return (
    <div className=' h-full flex items-center justify-center  '>
      <motion.div className='w-96 h-96 bg-red-400 rounded'
        varients={varients}
        animate="varient2"
        transition={{ delay: 2, duration: 4 }}
      >
      </ motion.div>
    </div >
  )
}

export default page