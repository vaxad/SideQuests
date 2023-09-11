import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className=' flex justify-center items-center'>
      <div className=' grid lg:grid-cols-5 grid-cols-1 lg:w-8/12 w-11/12'>
        <div className=' col-span-2'>
          <div className='flex flex-col'>
            <h1 className='text-2xl lg:text-left text-center font-semibold' style={{ color: '#303030' }}>FOODIE</h1>
            <div className=' flex flex-row lg:justify-normal justify-center items-center gap-10 py-10'>
              <svg width="42" height="25" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.92 4C40.38 4.7 38.72 5.16 37 5.38C38.76 4.32 40.12 2.64 40.76 0.62C39.1 1.62 37.26 2.32 35.32 2.72C33.74 1 31.52 0 29 0C24.3 0 20.46 3.84 20.46 8.58C20.46 9.26 20.54 9.92 20.68 10.54C13.56 10.18 7.22002 6.76 3.00002 1.58C2.26002 2.84 1.84002 4.32 1.84002 5.88C1.84002 8.86 3.34002 11.5 5.66002 13C4.24002 13 2.92002 12.6 1.76002 12V12.06C1.76002 16.22 4.72002 19.7 8.64002 20.48C7.38147 20.8244 6.06021 20.8723 4.78002 20.62C5.32323 22.325 6.38709 23.8168 7.82205 24.8859C9.25701 25.9549 10.9909 26.5474 12.78 26.58C9.74728 28.9809 5.98801 30.2786 2.12002 30.26C1.44002 30.26 0.760017 30.22 0.0800171 30.14C3.88002 32.58 8.40002 34 13.24 34C29 34 37.66 20.92 37.66 9.58C37.66 9.2 37.66 8.84 37.64 8.46C39.32 7.26 40.76 5.74 41.92 4Z" fill="#585858" />
              </svg>
              <svg width="36" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V32C36 33.0609 35.5786 34.0783 34.8284 34.8284C34.0783 35.5786 33.0609 36 32 36H4C2.93913 36 1.92172 35.5786 1.17157 34.8284C0.421427 34.0783 0 33.0609 0 32V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H32ZM31 31V20.4C31 18.6708 30.3131 17.0124 29.0903 15.7897C27.8676 14.5669 26.2092 13.88 24.48 13.88C22.78 13.88 20.8 14.92 19.84 16.48V14.26H14.26V31H19.84V21.14C19.84 19.6 21.08 18.34 22.62 18.34C23.3626 18.34 24.0748 18.635 24.5999 19.1601C25.125 19.6852 25.42 20.3974 25.42 21.14V31H31ZM7.76 11.12C8.65113 11.12 9.50576 10.766 10.1359 10.1359C10.766 9.50576 11.12 8.65113 11.12 7.76C11.12 5.9 9.62 4.38 7.76 4.38C6.86357 4.38 6.00385 4.73611 5.36998 5.36998C4.73611 6.00385 4.38 6.86357 4.38 7.76C4.38 9.62 5.9 11.12 7.76 11.12ZM10.54 31V14.26H5V31H10.54Z" fill="#585858" />
              </svg>
              <svg width="40" height="25" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 20L26.38 14L16 8V20ZM39.12 4.34C39.38 5.28 39.56 6.54 39.68 8.14C39.82 9.74 39.88 11.12 39.88 12.32L40 14C40 18.38 39.68 21.6 39.12 23.66C38.62 25.46 37.46 26.62 35.66 27.12C34.72 27.38 33 27.56 30.36 27.68C27.76 27.82 25.38 27.88 23.18 27.88L20 28C11.62 28 6.4 27.68 4.34 27.12C2.54 26.62 1.38 25.46 0.88 23.66C0.62 22.72 0.44 21.46 0.32 19.86C0.18 18.26 0.12 16.88 0.12 15.68L0 14C0 9.62 0.32 6.4 0.88 4.34C1.38 2.54 2.54 1.38 4.34 0.88C5.28 0.62 7 0.44 9.64 0.32C12.24 0.18 14.62 0.12 16.82 0.12L20 0C28.38 0 33.6 0.32 35.66 0.88C37.46 1.38 38.62 2.54 39.12 4.34Z" fill="#585858" />
              </svg>
              <svg width="21" height="25" viewBox="0 0 21 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.24 6.64006H21V0.28006C19.1795 0.090754 17.3503 -0.00270857 15.52 5.97282e-05C10.08 5.97282e-05 6.36 3.32006 6.36 9.40006V14.6401H0.220001V21.7601H6.36V40.0001H13.72V21.7601H19.84L20.76 14.6401H13.72V10.1001C13.72 8.00006 14.28 6.64006 17.24 6.64006Z" fill="#585858" />
              </svg>
            </div>
          </div>
        </div>
        <div className=' col-span-3 lg:gap-10 gap-5 flex-row text-left grid grid-cols-8' style={{ color: '#4C4C4C' }}>
          <div className=' col-span-2 '>
            <h3 className='py-1 lg:text-left text-center text-sm '>Quality</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>Help</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>Share</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>Carrers</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>Work</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>Testimonials</h3>
          </div>
          <div className=' col-span-3 flex flex-col '>
            <h3 className='py-1 lg:text-left text-center text-sm '>244-5333-7783</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>hello@food.com</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>press@food.com</h3>
            <h3 className='py-1 lg:text-left text-center text-sm '>contact@food.com</h3>
          </div>
          <div className=' col-span-3'>
            <h3 className=' lg:text-left text-center py-1 text-sm'>Terms & Conditions</h3>
            <h3 className=' lg:text-left text-center py-1 text-sm'>Privacy Policy</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
