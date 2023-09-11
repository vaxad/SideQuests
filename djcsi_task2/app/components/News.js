"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function News() {
  return (
    <div className=' lg:h-screen sm:min-h-screen flex flex-col justify-betwe items-center gap-2 lg:px-28 md:px-16 px-14 py-5'>
      <div className=' lg:justify-between justify-center items-center flex w-full lg:flex-row flex-col lg:py-0 py-8'>
        <h1 className=' lg:text-4xl md:text-3xl text-2xl font-bold'>Browse our latest news</h1>
        <p className=' lg:w-1/3 md:w-1/2 text-center lg:text-left text-lg text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <motion.div id='news' initial="hidden" whileInView="visible" transition={{ duration: 0.5, ease: 'linear' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }} className=' h-4/5 w-full flex lg:flex-row flex-col justify-center gap-10 items-center'>
        <div className=' lg:w-1/3 md:w-1/2 w-full flex hover:scale-105 transition-all cursor-pointer justify-center items-center flex-col rounded-3xl'>
          <img src='/assets/post1.jpg' className=' h-1/3 rounded-t-3xl' />
          <div className=' bg-violet-950 rounded-b-3xl relative gap-3 flex flex-col justify-center items-center p-5'>
            <div className=' absolute bg-violet-600 rounded-full py-2 px-3 -top-5 z-10 left-5 text-sm'>PRODUCTS</div>
            <h1 className=' text-xl mt-4 font-bold'>
              What is the best and most secure crypto wallet of 2021?
            </h1>
            <p className=' text-md text-slate-400 mb-3'>
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.
            </p>
            <div className=' w-full border border-slate-600 opacity-60 ' />
            <div className=' h-1/6 flex flex-row gap-3 py-1 w-full justify-start items-center'>
              <img src='/assets/profile1.jpg' className='h-14 rounded-full'></img>
              <div className=' flex-col flex'>
                <h1 className=' text-md font-bold'>
                  ALEX TURNER
                </h1>
                <p className=' text-sm text-slate-400 '>
                  SEPTEMBER 1,2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' lg:w-1/3 md:w-1/2 w-full flex hover:scale-105 transition-all cursor-pointer justify-center items-center flex-col rounded-3xl'>
          <img src='/assets/post2.jpg' className=' h-1/3 rounded-t-3xl' />
          <div className=' bg-violet-950 rounded-b-3xl relative gap-3 flex flex-col justify-center items-center p-5'>
            <div className=' absolute bg-violet-600 rounded-full py-2 px-3 -top-5 z-10 left-5 text-sm'>TUTORIALS</div>
            <h1 className=' text-xl mt-4 font-bold'>
              How to trade crpto tokens from your phone?
            </h1>
            <p className=' text-md text-slate-400 mb-3'>
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.
            </p>
            <div className=' w-full border border-slate-600 opacity-60 ' />
            <div className=' h-1/6 flex flex-row gap-3 py-1 w-full justify-start items-center'>
              <img src='/assets/profile2.jpg' className='h-14 rounded-full'></img>
              <div className=' flex-col flex'>
                <h1 className=' text-md font-bold'>
                  JOHN CARTER
                </h1>
                <p className=' text-sm text-slate-400 '>
                  SEPTEMBER 1,2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' lg:w-1/3 md:w-1/2 w-full flex hover:scale-105 transition-all cursor-pointer justify-center items-center flex-col rounded-3xl'>
          <img src='/assets/post3.jpg' className=' h-1/3 rounded-t-3xl' />
          <div className=' bg-violet-950 rounded-b-3xl relative gap-3 flex flex-col justify-center items-center p-5'>
            <div className=' absolute bg-violet-600 rounded-full py-2 px-3 -top-5 z-10 left-5 text-sm'>APPS</div>
            <h1 className=' text-xl mt-4 font-bold'>
              5 great crypto apps you should not be missing out
            </h1>
            <p className=' text-md text-slate-400 mb-3'>
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.
            </p>
            <div className=' w-full border border-slate-600 opacity-60 ' />
            <div className=' h-1/6 flex flex-row gap-3 py-1 w-full justify-start items-center'>
              <img src='/assets/profile3.jpg' className='h-14 rounded-full'></img>
              <div className=' flex-col flex'>
                <h1 className=' text-md font-bold'>
                  SOPHIE MOORE
                </h1>
                <p className=' text-sm text-slate-400 '>
                  SEPTEMBER 1,2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className=' bg-slate-700 bg-opacity-50 hover:bg-opacity-100 transition-all cursor-pointer text-sm rounded-full lg:my-0 my-8 py-4 px-4'>
        VIEW ALL ARTICLES
      </div>
    </div>
  )
}
