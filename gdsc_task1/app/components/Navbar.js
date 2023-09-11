"use client"
import useStore from '@/lib/zustand'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const { mode, switchMode } = useStore()
    const [show, setshow] = useState(false)
    const [bg, setbg] = useState('bg-light text-dark')
    useEffect(() => {
        setbg(mode ? 'bg-light text-dark' : 'bg-dark text-light')
    }, [mode])

    return (
        <div className={`flex flex-row justify-between items-center py-6 lg:px-16 md:px-14 px-5 w-full ${bg} shadow-lg ${mode ? 'shadow-gray-100' : ' shadow-zinc-900'}`}>
            <div className=' flex items-center justify-center'>
                <img className={`${mode ? 'h-8' : ' h-6'}`} src={mode ? '/assets/logo.png' : '/assets/logodark.png'} />
            </div>
            <div className=' flex flex-row justify-center items-center gap-5'>
            <div onClick={() => { setshow(!show) }} className={`lg:hidden  block right-0 h-fit w-fit rounded-lg border p-2 transition-all ${mode?'border-black':'border-white'} ${show ? ' rotate-90' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={mode?'#000000':'#ffffff'} x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
                <ul className={`lg:flex lg:static ${show?mode?'bg-white':'bg-zinc-900':' '}  ${show?'flex w-screen absolute top-0 right-0 flex-col h-screen':'hidden'} lg:bg-transparent lg:flex-row justify-center items-center gap-10`}>
                    <li className={`cursor-pointer transition-all bg-transparent hover:${mode ? 'bg-faded text-fade hover:text-dark' : 'bg-zinc-800 text-gray-400 hover:text-white'} py-2 px-3 rounded-lg`}>Home</li>
                    <li className={`cursor-pointer transition-all ${mode ? 'bg-faded text-dark' : 'bg-zinc-800 text-white'} py-2 px-3 text-dark rounded-lg`}>Events</li>
                    <li className={`cursor-pointer transition-all bg-transparent hover:${mode ? 'bg-faded text-fade hover:text-dark' : 'bg-zinc-800 text-gray-400 hover:text-white'} py-2 px-3 rounded-lg`}>About</li>
                    <li className={`cursor-pointer transition-all bg-transparent hover:${mode ? 'bg-faded text-fade hover:text-dark' : 'bg-zinc-800 text-gray-400 hover:text-white'} py-2 px-3 rounded-lg`}>Contact</li>
                    <div onClick={() => { setshow(!show) }} className={`lg:hidden block right-0 h-fit w-fit p-2 transition-all ${mode?'bg-gray-200':'bg-zinc-700'} rounded-full ${show ? ' rotate-90' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={mode?'#000000':'#ffffff'} x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
<path d="M 8.71875 7.28125 L 7.28125 8.71875 L 14.5625 16 L 7.28125 23.28125 L 8.71875 24.71875 L 16 17.4375 L 23.28125 24.71875 L 24.71875 23.28125 L 17.4375 16 L 24.71875 8.71875 L 23.28125 7.28125 L 16 14.5625 Z"></path>
</svg>
                </div>
                </ul>
                <div onClick={() => { switchMode() }} className=' cursor-pointer transition-all bg-transparent hover:scale-105'><img className=' h-8' src='/assets/nightmode.png'></img></div>
            </div>
        </div>
    )
}
