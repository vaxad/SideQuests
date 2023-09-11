
import React from 'react'
import ProductCard from '../components/ProductCard';

export const metadata = {
    title: "Products - Flopify",
    description: "gdsc task2",
};

export default async function page() {

    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    
    const cards = data.map((item) => {
        return (
            <ProductCard key={item.id} item={item} />
        )
    })

    return (
        <div className=' flex flex-col justify-center items-center lg:p-24 md:p-24 p-6 lg:py-32 md:py-32 py-32 relative'>
            <h1 className=' lg:text-4xl md:text-3xl text-2xl text-center font-bold '>Explore our Products!</h1>
            <div className=' py-12 flex flex-col gap-10 w-full '>
                {cards}
            </div>
        </div>
    )
}
