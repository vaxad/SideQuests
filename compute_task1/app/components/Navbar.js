"use client"
import store from '@/lib/zustand'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [show, setshow] = useState(false)
  const [shownav, setshownav] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { cart } = store()
  useEffect(() => {
    const id = window.location.href.includes('order') ? 'opage' : window.location.href.includes('about') ? 'apage' : 'hpage'
    const collection = document.getElementsByTagName('h4')
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "#858585";
    }
    document.getElementById(id).style.color = "#EAB308";
  }, [])
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm !== '') {
      setSearch(searchTerm)
    }
    setSearchTerm('')
    setshow(false)
  }
  const handleTopic = (e) => {

    setshownav(false)
  }
  return (
    <>
      <nav className=" bg-black">
        <div className="lg:w-screen flex flex-wrap items-center justify-between py-4 lg:pr-24 lg:pl-16 pr-12 pl-10">
          <div className="block items-center">
            {/* <img src="" className="h-8 mr-3" alt=" Logo" /> */}
            <span className="self-center flex flex-row lg:text-2xl text-lg font-semibold whitespace-nowrap text-white"><p>Coffee</p><p className=' text-yellow-500'>Peela</p></span>
          </div>
          <div className={`flex ${show ? 'lg:w-2/4 w-3/5' : ''} md:order-2 gap-5 transition-all`}>

            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="relative bg-gray-700  rounded-lg text-sm p-2.5 mr-1" >
              <svg className=' text-white w-5 h-5' fill='#ffffff' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                <path d="M21 48A5 5 0 1021 58 5 5 0 1021 48zM47 48A5 5 0 1047 58 5 5 0 1047 48zM12.489 14.095l-.998-4.24C10.96 7.596 8.945 6 6.625 6H1l1 4h4.625c.464 0 .867.319.973.771l7.093 30.146C15.117 42.731 16.718 44 18.584 44h31.734c1.95 0 3.607-1.395 3.94-3.314l4.093-23.533L12.489 14.095z"></path>
              </svg>
              <span className="sr-only">Search</span>
              {cart.length > 0 && <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cart.length}</div>}
            </button>
            {!show && <button onClick={() => { setshownav(!shownav) }} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`w-5 ${shownav ? 'rotate-90' : ''} transition-all h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>}
          </div>
          {!show && <div className="items-center justify-center pr-16 hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm  border  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex flex-col p-4 mx-5 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link href={'/'}><h4 className=" cursor-pointer block py-2 text-yellow-500  rounded  hover:text-slate-100 transition-all" id='hpage'>Home</h4>
                </Link></li>
              <li>
                <Link href={'/order'}><h4 className=" cursor-pointer block py-2  text-slate-400  rounded  hover:text-slate-100 transition-all" id='opage'>Order</h4>
                </Link></li>
              <li>
                <a href="https://portfolio-vaxad.netlify.app/" target='_blank'><h4 className=" cursor-pointer block py-2  text-slate-400  rounded  hover:text-slate-100 transition-all" id='apage'>About us</h4>
                </a></li>
            </ul>

          </div>}
        </div>
      </nav>
      {shownav && <div className='w-full lg:hidden flex justify-center items-center'>
        <ul className="flex flex-col justify-center items-center w-full p-4 bg-slate-950 mx-5 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link href={'/'}><h4 className=" cursor-pointer block py-2 text-yellow-500  rounded  hover:text-slate-100 transition-all" id='hpage'>Home</h4>
            </Link></li>
          <li>
            <Link href={'/order'}><h4 className=" cursor-pointer block py-2  text-slate-400  rounded  hover:text-slate-100 transition-all" id='opage'>Order</h4>
            </Link></li>
          <li>
            <a href="https://portfolio-vaxad.netlify.app/" target='_blank'><h4 className=" cursor-pointer block py-2  text-slate-400  rounded  hover:text-slate-100 transition-all" id='apage'>About us</h4>
            </a></li>
        </ul>
      </div>}
    </>
  )
}