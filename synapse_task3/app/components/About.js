import React from 'react'

export default function About() {
  return (
    <div id='about'>
      <div className=' grid lg:grid-cols-2 grid-cols-1 lg:py-32 lg:pr-32 lg:pl-22 py-12 pr-5 pl-5'>
        <div className='flex justify-start items-start'>
          <div className=''>
            <img className='h-full w-full' src='/food2.png'></img>
          </div>
        </div>
        <div className=' w-full col-span-1'>
          <h3 className='lg:text-left text-center abttext'>About</h3>
          <h1 className=' lg:text-5xl md:text-3xl text-2xl lg:text-left text-center w-full pt-5' style={{ color: '#4C4C4C' }}>Food Is An Important Part Of A Balanced Diet</h1>
          <p className='lg:text-lg text-base lg:text-left text-center font-bold lg:pt-5 pt-2 mt-2 lg:mt-4' style={{ color: '#828282' }}>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
          <p className='lg:text-lg text-base lg:text-left text-center font-bold lg:py-3 py-1' style={{ color: '#828282' }}>Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
          <div className='py-2 flex lg:flex-row flex-col lg:gap-10 gap-5 lg:mt-6 mt-1'>
            <button className=' lg:py-1 py-3 px-10 flex gap-4 rounded-full align-middle justify-center items-center border border-white' style={{ backgroundColor: '#FE9E0D' }}>
              <h3 className='lg:text-lg text-base text-white' >Learn more</h3>
            </button>
            <button className=' flex gap-4 p-2 border lg:border-none border-gray-700 rounded-full align-middle justify-center items-center hover:gap-5 transition-all'>
              <svg className=' w-8 ' viewBox="0 0 90 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.9584 32.6854V56.3146C33.9584 58.0077 34.7313 59.2959 36.2771 60.1792C37.8229 61.0625 39.332 60.9889 40.8042 59.9584L59.1334 48.2542C60.532 47.3709 61.2313 46.1195 61.2313 44.5C61.2313 42.8806 60.532 41.6292 59.1334 40.7459L40.8042 29.0417C39.332 28.0111 37.8229 27.9375 36.2771 28.8209C34.7313 29.7042 33.9584 30.9924 33.9584 32.6854ZM45 88.6667C38.8903 88.6667 33.1486 87.5066 27.775 85.1864C22.4014 82.8691 17.7271 79.723 13.7521 75.748C9.7771 71.773 6.63096 67.0986 4.31368 61.725C1.99346 56.3514 0.833344 50.6098 0.833344 44.5C0.833344 38.3903 1.99346 32.6486 4.31368 27.275C6.63096 21.9014 9.7771 17.2271 13.7521 13.2521C17.7271 9.2771 22.4014 6.12948 27.775 3.80926C33.1486 1.49198 38.8903 0.333344 45 0.333344C51.1098 0.333344 56.8514 1.49198 62.225 3.80926C67.5986 6.12948 72.273 9.2771 76.248 13.2521C80.223 17.2271 83.3691 21.9014 85.6864 27.275C88.0066 32.6486 89.1667 38.3903 89.1667 44.5C89.1667 50.6098 88.0066 56.3514 85.6864 61.725C83.3691 67.0986 80.223 71.773 76.248 75.748C72.273 79.723 67.5986 82.8691 62.225 85.1864C56.8514 87.5066 51.1098 88.6667 45 88.6667Z" fill="#484848" />
              </svg>
              <h3 className='lg:text-lg text-base' style={{ color: '#515151' }}>Watch video</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
