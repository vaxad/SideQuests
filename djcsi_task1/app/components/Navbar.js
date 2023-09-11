"use client"
import React, { useState } from 'react'

export default function Navbar() {
    const [show, setshow] = useState(false)
    const handleClients = () => {
        const el = document.getElementById('reviews')
        el.scrollIntoView({ behavior: 'smooth' })
    }
    const handleFeatures = () => {
        const el = document.getElementById('features')
        el.scrollIntoView({ behavior: 'smooth' })
    }
    const handleContact = () => {
        const el = document.getElementById('contact')
        el.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div id='nav' className='flex flex-row justify-between py-8 lg:px-24 px-5'>
            <div className=' cursor-pointer '>
                <img src='https://www.gokozo.com/assets/images/Logo.svg'></img>
            </div>
            <div className={`lg:flex h-fit flex-col justify-center relative items-start gap-2 lg:bg-transparent `}>
                {<div onClick={() => { setshow(!show) }} className={`lg:hidden md:hidden block absolute right-0 h-fit w-fit rounded-lg border p-2 transition-all border-white ${show ? ' rotate-90' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" fill='#ffffff' y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>}
                <ul className={` lg:flex lg:flex-row lg:bg-transparent bg-purple-500  rounded-lg flex-col lg:p-0 p-5 gap-10 ${show ? 'block' : 'lg:block hidden'} lg:mt-0 mt-10`}>
                    <li onClick={() => { handleFeatures() }} className=' cursor-pointer transition-all hover:scale-110'>
                        About
                    </li>
                    <li onClick={() => { handleFeatures() }} className=' cursor-pointer transition-all hover:scale-110'>
                        Features
                    </li>
                    <li onClick={() => { handleClients() }} className=' cursor-pointer transition-all hover:scale-110'>
                        Integrations
                    </li>
                    <li onClick={() => { handleClients() }} className=' cursor-pointer transition-all hover:scale-110'>
                        Clients
                    </li>
                    <li onClick={() => { handleClients() }} className=' cursor-pointer transition-all hover:scale-110'>
                        Testimonials
                    </li>
                    <li onClick={() => { handleContact() }} className=' cursor-pointer transition-all hover:scale-110 font-extrabold'>Contact us
                    </li>
                </ul>
            </div>
        </div>
    )
}
