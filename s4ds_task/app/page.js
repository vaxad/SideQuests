"use client"

import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard"
import Loading from "./loading"

export default function Home() {
  
  const [n,setN]=useState(0)
  const pageSize=30
  const [data,setData]=useState([])
  const [total,setTotal]=useState(0)
  const updateData=async()=>{
    const res= await fetch(`https://dummyjson.com/products?limit=30&skip=${n}`)
    const resd= await res.json()
    setData(resd.products)
    setTotal(resd.total)
    goToTop()
  }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }


  useEffect(() => {
    updateData()
  }, [n])
  
  const handlNext=()=>{
    setN(n+pageSize)
  }

  const handlPrev=()=>{
    setN(n-pageSize)
  }

  const content= data.map((pdt)=>{
    return(
      <ProductCard key={pdt.id} id={pdt.id} title={pdt.title} description={pdt.description} price={pdt.price} discountPercentage={pdt.discountPercentage} rating={pdt.rating} stock={pdt.stock} brand={pdt.brand} category={pdt.category} thumbnail={pdt.thumbnail} images={pdt.images} />
    )
  })

  return data.length===0?(<Loading/>):(
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 py-12 px-4">
      <h1 className=" text-3xl pb-12 text-purple-100 text-center"> DummyJson data displaying by <a href="https://github.com/vaxad/dummyJsonNext" title="visit repository" className=" text-purple-400">vaxad</a></h1>
      {content}
      <div className=" flex w-full justify-between p-4">
      {(n-pageSize>=0)?<button className=" border p-3 rounded-xl border-purple-500 transition-all text-slate-100 hover:bg-purple-500" onClick={()=>{handlPrev()}}>Previous</button>
      :<div></div>}
      <h3>{(n+pageSize)/pageSize}/{Math.ceil(total/pageSize)}</h3>
      {(n+pageSize<=total)?<button className=" border p-3 rounded-xl border-purple-500 transition-all text-slate-100 hover:bg-purple-500" onClick={()=>{handlNext()}}>Next</button>
      :<div></div>
      }
      </div>
    </main>
  )
}
