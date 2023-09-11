"use client"
import store from '@/lib/zustand'
import React, { useEffect, useState } from 'react'

export default function OrderCard({ el }) {
    const { add, sub, cart } = store()
    const [count, setCount] = useState(false)
    useEffect(() => {
        let ctr = 0
        cart.forEach(element => {
            if (element.id === el.id)
                ctr++
        });
        setCount(ctr)
        ctr = 0

    }, [cart])


    return (
        <div className={`flex flex-col justify-center items-center lg:p-10 md:p-6 p-3 animate-fade-up animate-delay-150 transition-all `}>
            <div className=' flex-col rounded-xl'>
                <img className=' rounded-t-xl' src={el.img}></img>
                <div className={`flex flex-col py-10 gap-5 px-8 bg-yellow-600 rounded-b-xl ${cart.find(it => it.id === el.id) ? '' : 'opacity-90'} hover:opacity-100 transition-all`}>
                    <h1 className=' text-xl font-semibold'>{el.name}</h1>
                    <h3 className=' text-md font-normal'>{el.description}</h3>
                    {!cart.find(it => it.id === el.id) ? <button onClick={() => { add(el) }} className=' animate-fade-up animate-delay-300  block rounded-lg w-full bg-yellow-900 text-slate-100 transition-all hover:bg-slate-100 py-3 hover:text-yellow-600'>
                        <h1 className=' text-lg font-medium '>10 USD</h1>
                    </button> : <button className=' animate-fade-up animate-delay-300 flex flex-row justify-between items-center rounded-lg w-full   transition-all bg-slate-100 py-3 text-yellow-600'>
                        <h1 onClick={() => { sub(el); setCount(count - 1) }} className=' text-lg font-medium px-6 '>-</h1>
                        <h1 className=' text-lg font-medium '>{cart.filter((e) => { return e.id === el.id }).length}</h1>
                        <h1 onClick={() => { add(el) }} className=' text-lg font-medium px-6'>+</h1>
                    </button>}
                </div>
            </div>
        </div>
    )
}
