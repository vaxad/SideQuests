import React from 'react'

export default function Testimonials() {
  return (
    <div id='testimonials' className='flex items-center flex-col justify-evenly'>
      <div className=' flex-col justify-center items-center lg:w-1/4 w-10/12 text-center'>
        <h3 className=' text-md' style={{ color: '#F4980D' }}>Work</h3>
        <h1 className=' lg:text-4xl text-2xl py-5' style={{ color: '#4C4C4C' }}>How It Works</h1>
        <p className=' lg:text-md text-base font-semibold' style={{ color: '#828282' }}>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
      </div>
      <div className='flex-row flex-wrap flex lg:px-32 px-3 gap-10 justify-center'>

        <div className=' p-5 rounded-2xl cursor-pointer lg:w-1/5 w-full m-5 transition-all hover:scale-110' style={{ backgroundColor: '#FFFFFF' }} >
          <div className=' items-center flex justify-center'>
            <svg width="100" height="100" viewBox="0 0 121 123" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M110.178 121.128L100.925 112.022H105.625C105.625 113.686 105.061 115.081 103.933 116.205C102.809 117.333 101.415 117.897 99.75 117.897C98.0854 117.897 96.6911 117.333 95.567 116.205C94.439 115.081 93.875 113.686 93.875 112.022V104.972L2.07813 13.175C0.903134 12 0.339134 10.6037 0.386134 8.98613C0.437051 7.37246 1.05001 5.97813 2.22501 4.80313C3.40001 3.62813 4.7963 3.04062 6.41388 3.04062C8.02755 3.04062 9.42188 3.62813 10.5969 4.80313L118.55 112.903C119.725 114.078 120.313 115.449 120.313 117.016C120.313 118.582 119.725 119.953 118.55 121.128C117.375 122.303 115.981 122.891 114.367 122.891C112.749 122.891 111.353 122.303 110.178 121.128ZM105.625 83.2344L93.4344 71.0438L76.25 53.8594V29.625C76.25 21.4979 79.1151 14.5713 84.8451 8.84513C90.5713 3.11504 97.4979 0.25 105.625 0.25V83.2344ZM64.5 42.1094L52.75 30.3594V6.125C52.75 4.46042 53.314 3.06413 54.442 1.93612C55.5661 0.812041 56.9604 0.25 58.625 0.25C60.2896 0.25 61.6859 0.812041 62.8139 1.93612C63.938 3.06413 64.5 4.46042 64.5 6.125V42.1094ZM46.875 24.4844L35.125 12.7344V6.125C35.125 4.46042 35.6871 3.06413 36.8111 1.93612C37.9391 0.812041 39.3354 0.25 41 0.25C42.6646 0.25 44.0609 0.812041 45.1889 1.93612C46.313 3.06413 46.875 4.46042 46.875 6.125V24.4844ZM29.25 6.85938L22.6406 0.25C24.5011 0.25 26.0677 0.886459 27.3406 2.15938C28.6136 3.43229 29.25 4.99896 29.25 6.85938ZM35.125 111.875V63.9938C30.1313 62.6229 25.9463 59.8813 22.5701 55.7688C19.1901 51.6563 17.5 46.8583 17.5 41.375V11.8531L29.25 23.6031V41.375H35.125V29.4781L46.875 41.2281V41.375H47.0219L60.2406 54.5938C58.674 56.8458 56.7411 58.7787 54.442 60.3924C52.139 62.01 49.6167 63.2104 46.875 63.9938V111.875C46.875 113.54 46.313 114.934 45.1889 116.058C44.0609 117.186 42.6646 117.75 41 117.75C39.3354 117.75 37.9391 117.186 36.8111 116.058C35.6871 114.934 35.125 113.54 35.125 111.875Z" fill="#FE9E0D" />
            </svg>
          </div>
          <h1 className=' text-xl py-5 text-center' style={{ color: '#505050' }}>Pick</h1>
          <p className=' text-xs font-bold text-center' style={{ color: '#474747' }}>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
        </div>

        <div className=' p-5 rounded-2xl cursor-pointer lg:w-1/5 w-full m-5 transition-all hover:scale-110' style={{ backgroundColor: '#FFFFFF' }} >
          <div className=' items-center flex justify-center'>
            <svg width="100" height="100" viewBox="0 0 92 107" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.5521 42.1204L62.9908 42.83L85.7521 54.1833C89.5729 55.4387 92.0837 59.205 91.7562 63.2442V64.6633L86.8437 98.0683C86.5162 100.415 85.4792 102.599 83.5687 104.127C81.8767 105.765 79.6387 106.583 77.2917 106.583H39.7383C37.0637 106.583 34.6075 105.601 32.8063 103.69L0.110832 71.1041L5.02333 65.6458C6.33333 64.2812 8.4075 63.5171 10.3725 63.6262H11.9554L33.625 68.375V11.0625C33.625 8.1672 34.7751 5.3905 36.8224 3.34323C38.8697 1.29596 41.6464 0.145813 44.5417 0.145813C47.4369 0.145813 50.2136 1.29596 52.2609 3.34323C54.3082 5.3905 55.4583 8.1672 55.4583 11.0625V42.1204H59.5521Z" fill="#FE9E0D" />
            </svg>
          </div>
          <h1 className=' text-xl py-5 text-center' style={{ color: '#505050' }}>Choose How Often</h1>
          <p className='text-xs font-bold text-center' style={{ color: '#474747' }}>Lorem ipsum dolor sit amet consectetur. Maecenas orci et </p>
        </div>

        <div className='  p-5 rounded-2xl cursor-pointer lg:w-1/5 w-full m-5 transition-all hover:scale-110' style={{ backgroundColor: '#FFFFFF' }} >
          <div className=' items-center flex justify-center'>
            <svg width="100" height="100" viewBox="0 0 111 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 0C7.84784 0 5.3043 1.05357 3.42893 2.92893C1.55357 4.8043 0.5 7.34784 0.5 10V65H10.5C10.5 68.9782 12.0804 72.7936 14.8934 75.6066C17.7064 78.4197 21.5218 80 25.5 80C29.4782 80 33.2936 78.4197 36.1066 75.6066C38.9197 72.7936 40.5 68.9782 40.5 65H70.5C70.5 68.9782 72.0803 72.7936 74.8934 75.6066C77.7064 78.4197 81.5218 80 85.5 80C89.4782 80 93.2936 78.4197 96.1066 75.6066C98.9197 72.7936 100.5 68.9782 100.5 65H110.5V40L95.5 20H80.5V0M45.5 10L65.5 30L45.5 50V35H15.5V25H45.5M80.5 27.5H93L102.85 40H80.5M25.5 57.5C27.4891 57.5 29.3968 58.2902 30.8033 59.6967C32.2098 61.1032 33 63.0109 33 65C33 66.9891 32.2098 68.8968 30.8033 70.3033C29.3968 71.7098 27.4891 72.5 25.5 72.5C23.5109 72.5 21.6032 71.7098 20.1967 70.3033C18.7902 68.8968 18 66.9891 18 65C18 63.0109 18.7902 61.1032 20.1967 59.6967C21.6032 58.2902 23.5109 57.5 25.5 57.5ZM85.5 57.5C87.4891 57.5 89.3968 58.2902 90.8033 59.6967C92.2098 61.1032 93 63.0109 93 65C93 66.9891 92.2098 68.8968 90.8033 70.3033C89.3968 71.7098 87.4891 72.5 85.5 72.5C83.5109 72.5 81.6032 71.7098 80.1967 70.3033C78.7902 68.8968 78 66.9891 78 65C78 63.0109 78.7902 61.1032 80.1967 59.6967C81.6032 58.2902 83.5109 57.5 85.5 57.5Z" fill="#FE9E0D" />
            </svg>
          </div>
          <h1 className=' text-xl py-5 text-center' style={{ color: '#505050' }}>Fast Deliveries</h1>
          <p className=' text-xs font-bold text-center' style={{ color: '#474747' }}>Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
        </div>
        
      </div>
    </div>
  )
}
