import Link from 'next/link'
import React from 'react'

export default function ProductCard({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail}) {
    
  return (
    
<Link title={`view ${title}`} href={`/${id}`} id='ProductCard' className="flex flex-col items-center bg-white border border-gray-200 rounded-lg lg:w-full my-5 p-4 lg:p-0 lg:m-3 shadow md:flex-row md:w-2/4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className=' w-48 h-48 flex'>
    <img className="object-cover lg:w-full lg:h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={thumbnail} alt=""/>
    </div>
    <div className="flex flex-col justify-between lg:p-4 p-1 leading-normal">
        <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className='grid lg:grid-cols-6 grid-cols-2'>
            <h3 className=' lg:text-right px-2'>Price: </h3>
            <p className=' break-words'>{price}</p>
            <h3 className=' lg:text-right px-2'>Rating: </h3>
            <p className=' break-words'>{rating}</p>
            <h3 className=' lg:text-right px-2'>Discount: </h3>
            <p className=' break-words'>{discountPercentage}</p>
            <h3 className=' lg:text-right px-2'>Stock: </h3>
            <p className=' break-words'>{stock}</p>
            <h3 className=' lg:text-right px-2'>Brand: </h3>
            <p className=' break-words'>{brand}</p>
            <h3 className=' break-words lg:text-right px-2'>Category: </h3>
            <p className=' break-words'>{category}</p>
        </div>
    </div>
</Link>

  )
}
