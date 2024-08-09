"use client"


import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';

const Homepage = () => {

  // Typing effect
  const text = "Shubham | Full Stack Developer"

  // Multiple colors
  const colors = [
    '#ADD8E6', '#87CEEB', '#87CEFA', '#4682B4', '#5F9EA0', '#6495ED',
    '#00BFFF', '#1E90FF', '#4169E1', '#0000FF', '#0000CD', '#00008B'
  ];



  return (
    <motion.div
      className='h-full '
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-xl  ">
        {/* IMAGE CONTAINER  */}
        <div className=" h-1/2 lg:h-full lg:w-1/2  relative ">
          <img src="/hero_1.png" alt="hero_1.png" fill="true" className='object-contain' priority="true" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className='text-4xl md:text-6xl font-bold text-blue-600'>

            <div>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                  style={{ color: colors[index % colors.length] }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>

          {/*  DESC*/}
          <p className='md:text-xl text-slate-400  p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer font-serif'>
            I have a deep love for creating websites using various programming languages and technologies. The process of building something from scratch and seeing it come to life on the web is incredibly fulfilling. My passion extends beyond just development; I am constantly eager to learn and explore new things related to web development and programming. Whether it  mastering a new framework, experimenting with different design techniques, or diving into the latest trends in the tech world, I am always excited to expand my knowledge and skills. This relentless curiosity and enthusiasm for continuous learning drive me to stay ahead in the ever-evolving landscape of web development.
          </p>
          {/* BUTTONS */}
          <div className='w-full flex gap-4'>
            <Link href='/Work'>
              <button className='p-4 rounded-lg ring ring-black bg-black text-white'>View My Work</button>
            </Link>
            <Link href='/contact'>
              <button className='p-4 rounded-lg ring ring-black'>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
