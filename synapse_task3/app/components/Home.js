import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div id='home'>
      <div className=' z-30 lg:px-10 px-5'>
        <Navbar />
      </div>
      <div className=' grid lg:grid-cols-2 grid-cols-1 p-5'>
        <div className=' w-full col-span-1 lg:pt-32 lg:pl-32 lg:pb-0 pb-10 pt-20 pl-0'>
          <h1 className=' lg:text-5xl lg:text-left text-center md:text-3xl text-2xl -z-50 w-full' style={{ color: '#4C4C4C' }}>Your Favourite Food Delivered Hot & Fresh</h1>
          <p className='lg:text-lg text-base lg:text-left text-center font-bold py-5' style={{ color: '#828282' }}>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
          <div className='flex justify-center items-center lg:block'>
            <button className=' p-5 px-8 flex gap-4 rounded-full align-middle justify-center items-center hover:gap-5 transition-all' style={{ backgroundColor: '#FE9E0D' }}>
              <h3 className='lg:text-lg text-base text-white' >Order now</h3>
              <div className='flex align-middle justify-center items-center'>
                <svg className=' lg:w-5 w-4' viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2191 21.3489C16.8596 20.9566 16.687 20.4824 16.7013 19.9266C16.7169 19.3707 16.9045 18.8966 17.264 18.5042L22.3427 12.9619H2.29775C1.78839 12.9619 1.36112 12.7735 1.01596 12.3969C0.671985 12.0215 0.5 11.5559 0.5 11C0.5 10.4441 0.671985 9.97786 1.01596 9.60118C1.36112 9.2258 1.78839 9.03812 2.29775 9.03812H22.3427L17.2191 3.44675C16.8596 3.05437 16.6798 2.5881 16.6798 2.04793C16.6798 1.50906 16.8596 1.04344 17.2191 0.651064C17.5787 0.258688 18.0059 0.0625 18.5009 0.0625C18.9947 0.0625 19.4213 0.258688 19.7809 0.651064L28.0056 9.62668C28.1854 9.82287 28.313 10.0354 28.3885 10.2643C28.4628 10.4932 28.5 10.7384 28.5 11C28.5 11.2616 28.4628 11.5068 28.3885 11.7357C28.313 11.9646 28.1854 12.1771 28.0056 12.3733L19.736 21.398C19.4064 21.7577 18.9947 21.9375 18.5009 21.9375C18.0059 21.9375 17.5787 21.7413 17.2191 21.3489V21.3489Z" fill="white" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className=' col-span-1 flex justify-center items-center'>
          <img className='h-9/12 w-9/12 z-50' src='/food1.png'></img>
        </div>
      </div>
    </div>
  )
}
