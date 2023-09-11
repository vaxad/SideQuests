"use client"
import React, { useEffect, useState } from 'react'
import BpiCard from './BpiCard'
import { motion } from 'framer-motion'

export default function Bpi() {
  const [data, setdata] = useState({ bpi: [] })

  const getData = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const resp = await res.json()
    setdata(resp)
  }

  useEffect(() => {
    getData()
  }, [])


  const cards = Object.keys(data.bpi).map(key => {
    const value = data.bpi[key]
    return (
      <BpiCard key={key} index={key} value={value} />
    )
  })
  return (
    <div className=' flex flex-col justify-between items-center lg:p-24 md:p-16 p-14 lg:h-screen sm:min-h-screen'>
      <h1 className=' lg:text-4xl text-2xl font-bold text-center lg:py-0 py-8 '>{data.disclaimer}</h1>
      <motion.div id='cards' initial="hidden" whileInView="visible" transition={{ duration: 0.5, ease: 'linear' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }} className=' grid lg:grid-cols-3 grid-cols-1 gap-10'>
        {cards}
      </motion.div>
      <div className=' flex flex-row justify-center items-center gap-2'>
        <h3 className=' self-start lg:text-lg text-sm lg:py-0 py-8 font-medium'>Updated on:</h3><h3 className=' text-lg'>{new Date(data.time?.updated).toLocaleString()}</h3>


      </div>
    </div>
  )
}
