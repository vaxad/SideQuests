import React from 'react'

export default function Featured() {
    const bg1 = '/assets/flutter.png'
    const bg2 = '/assets/codeshastra.png'
    return (
        <div className=' lg:grid md:grid flex flex-col grid-cols-7 gap-10 w-full rounded-lg  justify-center items-center lg:px-16 md:px-10 px-5 py-12 text-light'>
            <div className=' lg:col-span-4 md:col-span-4 w-full h-full flex rounded-lg flex-col justify-between items-start hover:scale-105 transition-all' style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.3)' }}>
                <h1 className=' text-2xl p-4'>Getting Started With Flutter - Flutter Festival GDSC DJSCE</h1>
                <h3 className=' text-lg mt-48 p-4'>Description of Event</h3>
            </div>
            <div className=' lg:col-span-3 md:col-span-3 w-full h-full flex rounded-lg flex-col justify-between items-start hover:scale-105 transition-all' style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.3)' }}>
                <h1 className=' text-2xl p-4'>Code Shastra 8.0</h1>
                <h3 className=' text-lg mt-48 p-4'>Mark Your Calendar</h3>
            </div>
        </div>
    )
}
