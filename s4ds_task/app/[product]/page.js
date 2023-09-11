import Link from 'next/link'
import React from 'react'

export async function generateMetadata({ params }) {
    const pdtData = await fetch(`https://dummyjson.com/products/${params.product}`)
    const pdt = await pdtData.json()
    return {
        title: pdt.title,
        description: pdt.description
    }
}

export default async function Product({ params }) {
    const pdtData = await fetch(`https://dummyjson.com/products/${params.product}`)
    const pdt = await pdtData.json()

    return (
        <div>
            <div className='lg:pt-12 lg:px-12 px-4 pt-4'>
                <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">

                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)">
                            <path d="M25,2c-12.69141,0 -23,10.30859 -23,23c0,12.69141 10.30859,23 23,23c12.69141,0 23,-10.30859 23,-23c0,-12.69141 -10.30859,-23 -23,-23zM25,4c11.60938,0 21,9.39063 21,21c0,11.60938 -9.39062,21 -21,21c-11.60937,0 -21,-9.39062 -21,-21c0,-11.60937 9.39063,-21 21,-21zM20.875,16c-0.22266,0.02344 -0.43359,0.125 -0.59375,0.28125l-7.84375,7.875l-0.09375,0.03125c-0.02344,0.01953 -0.04297,0.03906 -0.0625,0.0625v0.03125c-0.02344,0.01953 -0.04297,0.03906 -0.0625,0.0625c-0.02344,0.01953 -0.04297,0.03906 -0.0625,0.0625c0,0.01172 0,0.01953 0,0.03125c-0.02344,0.01953 -0.04297,0.03906 -0.0625,0.0625c0,0.01172 0,0.01953 0,0.03125c-0.0625,0.10547 -0.10547,0.22266 -0.125,0.34375c0,0.01172 0,0.01953 0,0.03125c0,0.03125 0,0.0625 0,0.09375c0,0.01953 0,0.04297 0,0.0625c0,0.01172 0,0.01953 0,0.03125c0.01563,0.13281 0.05859,0.25781 0.125,0.375c0.00781,0.01953 0.01953,0.04297 0.03125,0.0625c0.01172,0.01172 0.01953,0.01953 0.03125,0.03125c0.00781,0.01953 0.01953,0.04297 0.03125,0.0625c0.01172,0.01172 0.01953,0.01953 0.03125,0.03125c0.01172,0.01172 0.01953,0.01953 0.03125,0.03125c0.01172,0.01172 0.01953,0.01953 0.03125,0.03125c0.05469,0.05859 0.11719,0.11328 0.1875,0.15625l7.8125,7.84375c0.39844,0.39844 1.03906,0.39844 1.4375,0c0.39844,-0.39844 0.39844,-1.03906 0,-1.4375l-6.28125,-6.28125h21.5625c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-21.5625l6.28125,-6.28125c0.32422,-0.30078 0.41016,-0.77734 0.21484,-1.17187c-0.19141,-0.39844 -0.625,-0.61719 -1.05859,-0.54687z">
                            </path>
                        </g></g>
                    </svg>
                </Link>
            </div>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block ">
                    <img className="w-full rounded-lg" alt="img of a girl posing" src={pdt.thumbnail} />
                </div>
                <div className="">

                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-sm leading-none text-slate-400">{pdt.brand}</p>
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-slate-100
							mt-2
                            "
                        >
                            {pdt.title}
                        </h1>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-slate-100">Rating</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-slate-400">{pdt.rating}/5</p>

                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-slate-100">Discount</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-slate-400">{pdt.discountPercentage}%</p>

                        </div>
                    </div>
                    <button
                        className="
                        mt-6
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                    >
                        BUY AT {pdt.price} USD
                    </button>
                    <div>
                        <p className=" text-base leading-normal text-gray-300 mt-7">{pdt.description}</p>
                        <p className="text-base leading-4 mt-7 text-gray-400">Category: {pdt.category}</p>
                        <p className="text-base leading-4 mt-4 text-gray-400">Stock: {pdt.stock}</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-center justify-between  mt-3 lg:space-x-4 md:space-x-0 px-28 pb-8">
                {pdt.images.map((pic) => {
                    return (
                        <img key={pic} alt="img-tag-one" className="lg:w-48 lg:h-48 my-4 rounded-md" src={pic} />
                    )
                })
                }
            </div>
        </div>
    )
}
