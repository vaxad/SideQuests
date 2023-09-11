import React from 'react'

export default function BpiCard({ index, value }) {
  return (
    <div className=' w-full flex flex-col justify-center  gap-2 p-5 rounded-xl bg-violet-950 hover:bg-violet-900 transition-all'>
      <h1 className=' text-3xl font-semibold text-center'>{index}</h1>
      <div className=' grid grid-cols-2'>
        <h3 className=' self-start text-lg font-medium'>Symbol:</h3><h3 className=' text-lg'>{value.symbol}</h3>
        <h3 className=' text-lg font-medium'>Rate:</h3><h3 className=' text-lg'>{value.rate}</h3>
        <h3 className=' text-lg font-medium'>Description:</h3><h3 className=' text-lg'>{value.description}</h3>
      </div>
    </div>
  )
}
