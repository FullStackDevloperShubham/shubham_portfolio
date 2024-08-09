"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from '@/components/Brain'

const page = () => {

  const containerRef = useRef()

  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef()
  // const isSkillRefInView = useInView(skillRef, { once: true })
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })


  const experienceRef = useRef()
  const isexperienceRefView = useInView(experienceRef, { margin: "-100px" })

  return (
    <motion.div
      className='h-full '
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

      {/* CONTAIENR */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>

        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:32 lg:48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2 '>

          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap:12  justify-center'>

            {/* BIOGRAPHY TITLE */}
            <h1 className='font-bold text-2xl text-gray-500 font-serif hover:text-gray-700 cursor-pointer'>About Me</h1>

            {/* BIOGRAPHY DESCRIPTION */}
            <p className='text-lg '>
              <b className='text-red-800 hover:cursor-pointer '>Bca : Bachelor of Computer Applications <br /> University : Punyashlok Ahilyadevi Holkar University, Solapur </b><br /><br />
              <b className='text-red-800 hover:cursor-pointer '>12 th : K. N. Bhise Arts, Commerce and Vinayakrao Patil Science College</b>
            </p>

            {/* BIOGRAPHY QUOTE */}
            {/* <span className='italic'>
              Lorem ipsum dolor sit amet consectetur
            </span> */}

            {/* BIOGRAPHY SIGN */}
            <div className=' self-end'>
              {/* TODDO  */}
            </div>

            {/* SCROLL SVG */}
            <div className=''>
              {/* TODO  ADD SVG*/}
            </div>

          </div>


          {/* SKILLS CONTAINER */}
          <motion.div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1 initial={{ y: "-300px" }} animate={isSkillRefInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl'>SKILLS</motion.h1>

            {/* SKILL LIST */}
            <motion.div initial={{ y: "-700px" }} animate={isSkillRefInView ? { y: 0 } : {}} transition={{ delay: 0.4 }} className='flex gap-4 flex-wrap'>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>HTML</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>CSS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>ReactJs</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>NodeJs</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>ExpressJs</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>ReduxToolkit</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>PHP</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>NextJs</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>TailwindCss</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>Bootstrap</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>Mysql</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>MongoDB</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>Framer-Motion</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>GitHub</div>
            </motion.div>

            {/* SCROLL SVG */}
            <motion.div initial={{ opacity: 0.2, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 3, easy: "easyInOut" }} className=''>
              <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Red circle at the top --> */}
                <circle cx="50" cy="20" r="10" fill="red" />
                {/* <!-- Blue circle in the middle --> */}
                <circle cx="50" cy="50" r="10" fill="blue" />
                {/* <!-- Green circle at the bottom --> */}
                <circle cx="50" cy="80" r="10" fill="green" />
              </svg>
            </motion.div>
          </motion.div>

          {/* EXPERENCE CONTAINER */}
          <div className='flex flex-col gap-12 justify-center pb-48 ' ref={experienceRef}>
            <motion.h1 initial={{ x: '-300px' }} animate={isexperienceRefView ? { x: "0" } : {}} transition={{ delay: 1 }} className='font-bold text-2xl'>Experience</motion.h1>

            {/* EXPERIENCE LIST  */}
            <motion.div initial={{ x: '-300px' }} animate={isexperienceRefView ? { x: "0" } : {}} className=''>
              {/* EXPERENCE LIST ITEM */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg '>Tech Stack</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>
                    Learn Html ,css javaScript
                  </div>
                  {/*JOB DATE  */}
                  <div className='p-3 text-red-400 text-sm font-semibold '>2021 - Present</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    {/* After experience add here company nae */}
                  </div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 '>
                  {/* LINNE */}
                  <div className='w-1 h-full bg-gray-600 relative'>
                    {/*LINE  CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2 '></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3 '>
                </div>
              </div>

              {/* SECOND  */}
              {/* EXPERENCE LIST ITEM */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>

                </div>
                {/* CENTER */}
                <div className='w-1/6 '>
                  {/* LINNE */}
                  <div className='w-1 h-full bg-gray-600 relative'>
                    {/*LINE  CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2 '></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3 '>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg '>Tech Stack</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>Learn :JavaScript , Reactjs , NodeJs , Mysql</div>
                  {/*JOB DATE  */}
                  <div className='p-3 text-red-400 text-sm font-semibold '>2022 : Present</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    {/* After exprece add company name */}
                  </div>
                </div>
              </div>

              {/* THIRD ONE */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg '>Tech Stack</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>Learn NextJs , MongoDB</div>
                  {/*JOB DATE  */}
                  <div className='p-3 text-red-400 text-sm font-semibold '>2022 : Present</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    {/* Add company after experince */}
                  </div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 '>
                  {/* LINNE */}
                  <div className='w-1 h-full bg-gray-600 relative'>
                    {/*LINE  CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2 '></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3 '>
                </div>
              </div>
              {/* THIRD  */}

              {/* Forth One */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>

                </div>
                {/* CENTER */}
                <div className='w-1/6 '>
                  {/* LINNE */}
                  <div className='w-1 h-full bg-gray-600 relative'>
                    {/*LINE  CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2 '></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3 '>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg '>Projects</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>What i learn , Every language and Framework I Done projects...I have experience on What i Lern</div>
                  {/*JOB DATE  */}
                  <div className='p-3 text-red-400 text-sm font-semibold '>All <span>Code</span> is on <b className='text-red-600'>GITHUB</b></div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    {/* After exprece add company name */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAIENR */}
        <div className='hiddenn lg:block sticky  top-0  z-30 w-1/3 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>{/* CONTAIENR HERE END*/}

    </motion.div>
  )
}

export default page