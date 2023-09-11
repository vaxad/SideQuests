"use client"
import useStore from '@/lib/zustand'
import React from 'react'

export default function Footer() {
    const { mode } = useStore()
    return (
        <div className=' w-full'>
            <div className={`flex lg:flex-row md:flex-row flex-col justify-between w-full px-16 py-10 ${mode ? 'bg-gray-100' : 'bg-zinc-800'}`}>
                <div className=' w-full flex justify-center items-center py-5'>
                    <img className=' h-8' src={`/assets/${mode ? 'logo.png' : 'logodark.png'}`}></img>
                </div>
                <div className=' w-full flex gap-3 flex-col justify-center items-center'>
                    <h1 className=' text-2xl font-semibold'>Community</h1>
                    <h3 className=' cursor-pointer hover:text-safe transition-all'>About us</h3>
                    <h3 className=' cursor-pointer hover:text-safe transition-all'>Teams</h3>
                    <h3 className=' cursor-pointer hover:text-safe transition-all'>Upcoming Events</h3>
                </div>
                <div className=' w-full flex gap-3 flex-col justify-center items-center py-5'>
                    <h1 className=' text-2xl font-semibold'>Follow us</h1>
                    <h3 className=' cursor-pointer hover:text-safe transition-all'>Instaram</h3>
                    <h3 className=' cursor-pointer hover:text-safe transition-all'>LinkedIn</h3>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center w-full py-5'>
                <h1>© GDSC DJSCE 2022</h1>
                <h1>Made with ❤️ by GDSC DJSCE</h1>
            </div>
        </div>
    )
}
