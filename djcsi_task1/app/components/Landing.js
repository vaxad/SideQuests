import React from 'react'
import Navbar from './Navbar'

export default function Landing() {
  return (
    <div className=' h-screen w-full overflow-x-hidden' style={{ backgroundColor: '#4019B2' }}>
      <Navbar />
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-24 px-5 py-10 lg:py-14'>
        <div>
          <h1 className='col-span-1 py-5 font-extrabold text-2xl md:text-3xl lg:text-5xl' style={{ lineHeight: 1.8 }}>The Quicker, Better, Smarter Expense Management Tool</h1>
          <p className=' w-4/5 font-light text-md'>Is your business caught in the red-tape of endless paper trails, the rigmarole of stuck approvals, faulty financial data entry and hours of number crunching? We&apos;ve got you covered.</p>
        </div>
      </div>
      <img src='/mockup1.png' className=' w-auto lg:h-5/6 md:h-3/5 h-3/6 absolute bottom-0 right-0'></img>
      {/* <img src='https://www.gokozo.com/assets/images/team-1.svg' className=' w-auto h-5/6 absolute bottom-0 right-0'></img> */}
    </div>
  )
}
