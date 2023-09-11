"use client"
import React, { useState } from 'react'

export default function Navbar() {
  const [show, setshow] = useState(false)
  const scrollContact = () => {
    var element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
  }
  const scrollAbout = () => {
    var element = document.getElementById("about");
    element.scrollIntoView({ behavior: "smooth" });
  }
  const scrollTestimonials = () => {
    var element = document.getElementById("testimonials");
    element.scrollIntoView({ behavior: "smooth" });
  }
  const scrollHome = () => {
    var element = document.getElementById("home");
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div id='navbar' className=' align-middle items-center z-50'>
      <div className="w-full flex  items-center h-full justify-between mx-auto my-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap" style={{ color: '#FE9E0D' }}>FOODIE</span>
        </a>
        <div onClick={() => { setshow(!show) }} className={`lg:hidden md:hidden rounded-lg border p-2 transition-all border-black ${show ? ' rotate-90' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium bg-transparent flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li className=' align-middle flex justify-center items-center px-4'>
              <div onClick={() => { scrollHome() }} className="navel block text-md py-2 cursor-pointer pl-3 pr-4 md:p-0 align-middle hover:scale-125 transition-all  z-50 " aria-current="page">Home</div>
            </li>
            <li className=' align-middle flex justify-center items-center px-4'>
              <div onClick={() => { scrollAbout() }} className="block text-md py-2 cursor-pointer pl-3 p-3 pr-4 md:p-0 hover:scale-125 transition-all  z-50 " >About</div>
            </li>
            <li className=' align-middle flex justify-center items-center px-4'>
              <div onClick={() => { scrollTestimonials() }} className="block text-md py-2 cursor-pointer pl-3 p-3 pr-4 md:p-0 hover:scale-125 transition-all  z-50">Testimonials</div>
            </li>
            <li className=' align-middle flex justify-center items-center px-4'>
              <div onClick={() => { scrollContact() }} className="block text-md py-2 cursor-pointer pl-3 p-3 pr-4 md:p-0 hover:scale-125 transition-all  z-50" >Contact</div>
            </li>
            <li className=' align-middle flex justify-center items-center px-4 hover:scale-125 transition-all  z-50'>
              <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9952 37.2903C10.977 37.2903 10.1056 36.9282 9.38111 36.2039C8.65538 35.4784 8.29251 34.6066 8.29251 33.5887C8.29251 32.5707 8.65538 31.699 9.38111 30.9735C10.1056 30.2492 10.977 29.8871 11.9952 29.8871C13.0135 29.8871 13.8848 30.2492 14.6093 30.9735C15.3351 31.699 15.6979 32.5707 15.6979 33.5887C15.6979 34.6066 15.3351 35.4784 14.6093 36.2039C13.8848 36.9282 13.0135 37.2903 11.9952 37.2903ZM30.5088 37.2903C29.4906 37.2903 28.6192 36.9282 27.8947 36.2039C27.169 35.4784 26.8061 34.6066 26.8061 33.5887C26.8061 32.5707 27.169 31.699 27.8947 30.9735C28.6192 30.2492 29.4906 29.8871 30.5088 29.8871C31.5271 29.8871 32.399 30.2492 33.1248 30.9735C33.8493 31.699 34.2115 32.5707 34.2115 33.5887C34.2115 34.6066 33.8493 35.4784 33.1248 36.2039C32.399 36.9282 31.5271 37.2903 30.5088 37.2903ZM10.4216 7.6774L14.8648 16.9314H27.8243L32.9156 7.6774H10.4216ZM11.9952 28.0363C10.6067 28.0363 9.55761 27.4267 8.84792 26.2077C8.13824 24.9898 8.10738 23.7794 8.75535 22.5764L11.2547 18.0419L4.5898 3.97578H2.69216C2.16761 3.97578 1.73562 3.79811 1.39621 3.44275C1.05679 3.08863 0.887085 2.64937 0.887085 2.12498C0.887085 1.60058 1.06482 1.16071 1.42028 0.805351C1.7745 0.45123 2.21389 0.27417 2.73844 0.27417H5.7469C6.08631 0.27417 6.4103 0.36671 6.71886 0.551791C7.02742 0.736872 7.25884 0.999069 7.41312 1.33838L8.66279 3.97578H35.9703C36.8034 3.97578 37.3743 4.28425 37.6828 4.90119C37.9914 5.51812 37.9759 6.1659 37.6365 6.84453L31.0642 18.6897C30.7248 19.3066 30.2774 19.7848 29.722 20.1241C29.1666 20.4634 28.534 20.633 27.8243 20.633H14.0317L11.9952 24.3347H32.4064C32.931 24.3347 33.363 24.5117 33.7024 24.8658C34.0418 25.2212 34.2115 25.6611 34.2115 26.1855C34.2115 26.7099 34.0338 27.1491 33.6783 27.5032C33.3241 27.8586 32.8847 28.0363 32.3602 28.0363H11.9952ZM14.8648 16.9314H27.8243H14.8648Z" fill="#333333" />
              </svg>
            </li>
            <li className='z-50'>
              <button href="#" className="block text-md p-3 px-4 font-bold rounded-full transition-all bg-white hover:bg-gray-800 hover:text-slate-50 z-50" aria-current="page" >Booking now</button>
            </li>
          </ul>
        </div>
      </div>
      {show && <div className=" w-full md:block md:w-auto z-50" id="navbar-default">
        <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 mt-4 z-50 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-orange-400 bg-opacity-70">
          <li className=' align-middle flex justify-center items-center px-4'>
            <div onClick={() => { scrollHome() }} className="navel block text-md  pl-3 pr-4 md:p-0 align-middle hover:scale-125 transition-all  z-50 " aria-current="page">Home</div>
          </li>
          <li className=' align-middle flex justify-center items-center px-4'>
            <div onClick={() => { scrollAbout() }} className="block text-md  pl-3  pr-4 md:p-0 hover:scale-125 transition-all  z-50 " >About</div>
          </li>
          <li className=' align-middle flex justify-center items-center px-4'>
            <div onClick={() => { scrollTestimonials() }} className="block text-md  pl-3 pr-4 md:p-0 hover:scale-125 transition-all  z-50">Testimonials</div>
          </li>
          <li className=' align-middle flex justify-center items-center px-4'>
            <div onClick={() => { scrollContact() }} className="block text-md pl-3 pr-4 md:p-0 hover:scale-125 transition-all  z-50" >Contact</div>
          </li>
          <li className=' align-middle flex justify-center items-center px-4'>
            <div onClick={() => { }} className="block text-md  pl-3 pr-4 md:p-0 hover:scale-125 transition-all  z-50">Cart</div>
          </li>
          <li className=' align-middle flex justify-center items-center px-4'>
            <div onClick={() => { }} className="block text-md pl-3 pr-4 md:p-0 hover:scale-125 transition-all text-white  z-50" >Booking now</div>
          </li>
        </ul>
      </div>}
    </div>
  )
}
