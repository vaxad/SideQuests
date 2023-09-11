"use client"
import useStore from '@/lib/zustand'
import React from 'react'

export default function EventCard({ el }) {
    const { mode } = useStore()

    return (
        <div className={`flex flex-col h-full justify-start shadow-lg ${mode ? 'shadow-gray-400' : ' shadow-zinc-900'} rounded-xl transition-all hover:scale-105 cursor-default`}>
            <img className={`rounded-t-xl h-60 border-b ${mode ? 'border-gray-300' : 'border-zinc-800'} object-cover`} src={'/assets/' + el.img}></img>
            <div className=' p-5 '>
                <h1 className=' hover:text-safe transition-all font-semibold text-lg'>{el.title}</h1>
                <p className=' text-lg font-normal'>{el.description}</p>
                <h3 className=' text-md font-light'>{el.date}</h3>
            </div>
        </div>
    )
}
