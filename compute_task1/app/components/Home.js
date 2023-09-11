import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div id='home' className='h-screen w-full overflow-y-hidden'>
      <Navbar />
      <div className="py-4 px-4 my-24 mx-auto h-full max-w-screen-xl text-center lg:py-8 lg:px-12">
        <Link href="/order" className=" animate-fade-up animate-delay-300 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm -z-10 text-gray-700 bg-gray-100 rounded-full dark:bg-yellow-800 dark:text-white hover:bg-gray-200 dark:hover:bg-yellow-700 transition-all" role="alert">
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3 ">New</span> <span className="lg:text-sm text-xs font-medium">Explore our latest dishes!</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </Link>
        <h1 className="mb-4 animate-fade text-2xl pt-10 font-extrabold  leading-none text-gray-900 md:text-xl lg:text-6xl dark:text-white">Experience the finest coffee blends </h1>
        <p className="mb-8 animate-fade animate-delay-100 text-sm font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">Immerse yourself in a world of aromatic coffee, skillfully brewed to perfection. Each cup tells a story of passion and craftsmanship.</p>
        <div className="flex flex-col animate-fade animate-delay-200 pt-10 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link href={'/order'} className="inline-flex justify-center gap-2 hover:gap-5 items-center py-3 px-5 lg:text-base text-sm font-medium text-center rounded-lg border bg-yellow-600 lg:bg-transparent  text-white border-slate-100 hover:bg-yellow-700 focus:ring-yellow-800 transition-all">
            Order now
            <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
              style={{ fill: "#000000" }}>
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M2,2c-1.10547,0 -2,0.89453 -2,2c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2h4.65625c2.08594,0 2.88672,0.66797 3.5625,2.9375l8,32.28125c0.42578,1.60938 0.90625,3.39063 2.71875,4.25c-0.57031,0.69141 -0.9375,1.56641 -0.9375,2.53125c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-0.73047 -0.21875,-1.41016 -0.5625,-2h6.125c-0.34375,0.58984 -0.5625,1.26953 -0.5625,2c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-1.03906 -0.41016,-1.97656 -1.0625,-2.6875c0.03516,-0.10156 0.0625,-0.19922 0.0625,-0.3125c0,-0.55078 -0.44922,-1 -1,-1h-15.28125c-2.69531,0 -2.98828,-1.07812 -3.5625,-3.25l-0.6875,-2.75h18.34375c0.41406,0 0.79297,-0.26953 0.9375,-0.65625l7.1875,-19c0.11719,-0.30469 0.05859,-0.63672 -0.125,-0.90625c-0.18359,-0.26953 -0.48828,-0.4375 -0.8125,-0.4375h-30.71875l-2.125,-8.59375c-0.67969,-2.28906 -1.83594,-4.40625 -5.5,-4.40625zM26,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2zM39,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2z"></path></g></g>
            </svg></div>
          </Link>
        </div>
        <div className=' lg:hidden mt-10 flex justify-center items-center w-full'>
          <img className=' w-1/2 ' src='/mug.png'></img>
        </div>
      </div>
    </div>
  )
}
