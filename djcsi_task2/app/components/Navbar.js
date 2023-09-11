"use client"
import React, { useState } from 'react'

export default function Navbar() {
    const [show, setshow] = useState(false)
    return (
        <div className=' w-full p-10 flex flex-row justify-between items-center lg:px-24 md:px-16 px-5'>
            <div className=' flex flex-row justify-center items-center'>
                <img className=' lg:w-16 md:w-14 w-12' src=' /logo.png'></img>
                <h2 className=' cursor-pointer lg:text-3xl md:text-2xl text-xl font-bold'>Crypto</h2>
                <div className='mx-14 lg:block relative hidden border h-16 border-slate-600'></div>
                <ul className={`lg:flex ${!show ? "hidden" : ''} lg:flex-row flex-col lg:static absolute right-5 top-24 rounded-2xl lg:p-0 p-5 lg:bg-transparent bg-violet-800 gap-8 text-base`}>
                    <li className=' hover:text-violet-500 transition-all cursor-pointer hover:scale-105'>
                        HOME
                    </li>
                    <li className=' hover:text-violet-500 transition-all cursor-pointer hover:scale-105'>
                        ABOUT
                    </li>
                    <li className=' hover:text-violet-500 transition-all cursor-pointer hover:scale-105'>
                        PRICING
                    </li>
                    <li className=' hover:text-violet-500 transition-all cursor-pointer hover:scale-105'>
                        TOKENS
                    </li>
                    <li className=' hover:text-violet-500 transition-all cursor-pointer hover:scale-105'>
                        BLOG
                    </li>
                    <li className=' hover:text-violet-500 transition-all cursor-pointer hover:scale-105'>
                        PAGES
                    </li>
                </ul>
            </div>
            <div className=' flex flex-row gap-4 justify-center items-center'>
                <h2 className=' cursor-pointer lg:text-base md:text-md text-xs '>{"CART(0)"}</h2>
                <button className=' bg-violet-500 transition-all lg:py-4 hover:bg-white hover:text-violet-500 lg:px-6 md:px-4 md:py-3 px-3 py-2 rounded-full lg:text-base md:text-md text-xs'>DOWNLOAD APP</button>
                <div onClick={() => { setshow(!show) }} className={`lg:hidden  block right-0 h-fit w-fit rounded-lg border p-2 transition-all border-white ${show ? ' rotate-90' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
            </div>

        </div>
    )
}
