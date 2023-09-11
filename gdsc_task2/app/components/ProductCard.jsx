"use client"
import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

export default function ProductCard({ item }) {
    const { addToCart, removeFromCart, cart } = UserAuth()
    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <div className={`bg-blue-900 flex lg:flex-row md:flex-row flex-col mx-2 md:pb-0 pb-14 rounded-xl items-center cursor-default transition-all relative ${cart.filter((el)=>{return el.id===item.id}).length!== 0 ? 'bg-blue-700 scale-100 md:scale-105 ' : 'hover:scale-105'}`}>
            <img src={item.image} className=' md:rounded-l-xl rounded-t-xl md:w-1/6 w-full '></img>
            <div className=' flex flex-col justify-start w-full items-start px-5 py-5 gap-3'>
                <h1 className=' text-2xl font-bold '>{item.title}</h1>
                <h1 className=' text-lg font-medium italic '>{item.description.length > 200 ? item.description.slice(0, 200) + "..." : item.description}</h1>
                <div className=' flex justify-between w-full'><div className=' flex-col gap-5'>
                    <h1 className=' text-xl font-semibold '>Price: {item.price} USD</h1>
                    <h1 className=' text-xl font-semibold '>Category: {item.category}</h1>
                    <h1 className=' text-xl font-semibold '>Rating: {item.rating.rate + " (" + item.rating.count + ")"}</h1>
                </div>
                </div>
            </div>

            {cart.filter((el)=>{return el.id===item.id}).length=== 0 ? <button onClick={() => { addToCart(item) }} className=' absolute bottom-5 right-5 text-lg transition-all text-black bg-slate-100 rounded-xl hover:bg-slate-200 py-2 px-3'>
                Add to cart</button>
                : <button className=' absolute bottom-5 right-5 text-lg transition-all text-black flex bg-slate-200  justify-between items-center rounded-lg '>
                    <span className=' hover:pr-6 transition-all bg-slate-300 rounded-l-lg rounded-r-3xl py-2 px-4 w-full' onClick={() => { addToCart(item) }} >+</span>
                    <span className=' bg-slate-200 py-2 px-8 w-full'  >{cart.filter((el) => { return el.id === item.id }).length}</span>
                    <span className=' hover:pl-6 transition-all bg-slate-300 py-2 px-4 w-full rounded-l-3xl rounded-r-lg' onClick={() => { removeFromCart(item) }} >-</span></button>
            }
        </div>
    )
}
