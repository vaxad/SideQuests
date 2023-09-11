import React from 'react'

export default function Footer() {
  return (
    <div id='contact' className=' w-full flex flex-col justify-center items-center lg:py-24 md:py-16 py-8' style={{ backgroundColor: '#4119b2' }}>
      <div className=' lg:text-4xl text-3xl text-center text-white font-extrabold lg:py-14 md:py-10 py-6'>
        <h1>Ready to Simplify your Finances?</h1>
      </div>
      <div className=' flex flex-row gap-20'>
        <span className=' flex flex-row gap-2'><img src='/mail.png' className=' w-5'></img><p className=' text-md'>hello@gokozo.com</p></span>
        <span className=' flex flex-row gap-2'><img src='/call.png' className=' w-5'></img><p className=' text-md'>9123134092</p></span>
      </div>
    </div>
  )
}
