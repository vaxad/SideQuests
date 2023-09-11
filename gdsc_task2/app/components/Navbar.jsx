"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut, cart } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [show, setshow] = useState(false)

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 fixed z-50 w-full shadow-xl shadow-zinc-950 flex bg-zinc-900 items-center justify-between p-2 lg:px-10 md:px-6 px-4 rounded-b-3xl">
      <h1 className=" lg:text-4xl md:text-3xl text-2xl font-bold p-1 flex cursor-default">
        <p className=" text-blue-600">Flop</p>ify
      </h1>
      <ul className={`lg:flex md:flex lg:gap-5 md:gap-3 ${show?' absolute flex top-20 right-8 flex-col justify-center gap-2 items-center rounded-lg p-4 bg-slate-400 ':'hidden'}`}>
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/products">Products</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="https://portfolio-vaxad.netlify.app/" target="_blank">About</Link>
        </li>
        {/* {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
        )} */}
      </ul>
      <div className=" flex gap-5 justify-between items-center">
        <div className=' relative p-3 rounded-full bg-slate-300'>
          {cart.length > 0 && <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cart.length}</div>}
          <svg xmlns="http://www.w3.org/2000/svg" className=" w-4" x="0px" y="0px" viewBox="0,0,256,256">
            <g className='' fill='#000000' fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M2,2c-1.10547,0 -2,0.89453 -2,2c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2h4.65625c2.08594,0 2.88672,0.66797 3.5625,2.9375l8,32.28125c0.42578,1.60938 0.90625,3.39063 2.71875,4.25c-0.57031,0.69141 -0.9375,1.56641 -0.9375,2.53125c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-0.73047 -0.21875,-1.41016 -0.5625,-2h6.125c-0.34375,0.58984 -0.5625,1.26953 -0.5625,2c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-1.03906 -0.41016,-1.97656 -1.0625,-2.6875c0.03516,-0.10156 0.0625,-0.19922 0.0625,-0.3125c0,-0.55078 -0.44922,-1 -1,-1h-15.28125c-2.69531,0 -2.98828,-1.07812 -3.5625,-3.25l-0.6875,-2.75h18.34375c0.41406,0 0.79297,-0.26953 0.9375,-0.65625l7.1875,-19c0.11719,-0.30469 0.05859,-0.63672 -0.125,-0.90625c-0.18359,-0.26953 -0.48828,-0.4375 -0.8125,-0.4375h-30.71875l-2.125,-8.59375c-0.67969,-2.28906 -1.83594,-4.40625 -5.5,-4.40625zM26,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2zM39,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2z"></path></g></g>
          </svg>
        </div>
        <button onClick={() => { setshow(!show) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`w-5 ${show? 'rotate-90' : ''} transition-all h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
        {loading ? null : !user ? (
          <ul className="lg:flex md:flex hidden gap-5 ">
            <li onClick={handleSignIn} className="py-2 px-3 bg-white hover:bg-slate-200 transition-all rounded-lg text-black cursor-pointer">
              Login
            </li>
          </ul>
        ) : (
          <div>
            <button onClick={handleSignOut} className="lg:flex md:flex hidden py-2 px-3 bg-white hover:bg-slate-200 transition-all rounded-lg text-black cursor-pointer">
              Sign out
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
