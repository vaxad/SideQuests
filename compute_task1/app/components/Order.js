import React from 'react'
import Navbar from './Navbar'
import OrderCard from './OrderCard'
import OrderBottom from './OrderBottom'

export default function Order() {
  const data = [
    {
      "id": 1,
      "name": "Espresso",
      "description": "Indulge in the essence of pure coffee with our Espresso. A concentrated shot of bold flavor, extracted with precision and passion. A timeless classic for those who appreciate the true essence of coffee.",
      "price": 3.99,
      "sale": false,
      "img": "/c1.jpg"
    },
    {
      "id": 2,
      "name": "Americano",
      "description": "Experience a harmonious blend of strength and subtlety with our Americano. Crafted by adding hot water to a shot of Espresso, it offers a smooth and balanced taste that's perfect for any time of day.",
      "price": 4.49,
      "sale": true,
      "img": "/c2.jpg"
    },
    {
      "id": 3,
      "name": "Cappuccino",
      "description": "Elevate your coffee journey with our Cappuccino. A symphony of Espresso, steamed milk, and a delicate crown of velvety milk foam. The interplay of flavors and textures creates a sensory masterpiece.",
      "price": 4.99,
      "sale": false,
      "img": "/c3.jpg"
    },
    {
      "id": 4,
      "name": "Latte",
      "description": "Savor the richness of our Latte, where Espresso meets a velvety sea of steamed milk. Delight in the art of balance as each sip unveils a harmonious dance between coffee and creaminess.",
      "price": 4.79,
      "sale": false,
      "img": "/c4.jpg"
    },
    {
      "id": 5,
      "name": "Mocha",
      "description": "Experience the decadence of our Mocha, where Espresso embraces the indulgence of chocolate. A luscious fusion that marries the bittersweet notes of coffee with the sweetness of cocoa.",
      "price": 5.29,
      "sale": false,
      "img": "/c5.jpg"
    },
    {
      "id": 6,
      "name": "Flat White",
      "description": "Discover the simplicity of perfection with our Flat White. A velvety marriage of Espresso and microfoam milk, delivering an unadulterated coffee experience that speaks volumes.",
      "price": 4.59,
      "sale": true,
      "img": "/c1.jpg"
    },
    {
      "id": 7,
      "name": "Macchiato",
      "description": "For those who seek the essence of coffee, our Macchiato is a revelation. A single shot of Espresso, \"stained\" with a dollop of steamed milk, offering a bold yet nuanced flavor profile.",
      "price": 4.29,
      "sale": false,
      "img": "/c2.jpg"
    },
    {
      "id": 8,
      "name": "Cold Brew",
      "description": "Chill out with our Cold Brew, a refreshing escape from the ordinary. Immerse yourself in a smoother, less acidic coffee adventure that's best enjoyed over ice.",
      "price": 4.99,
      "sale": false,
      "img": "/c3.jpg"
    },
    {
      "id": 9,
      "name": "Iced Latte",
      "description": "Stay cool and invigorated with our Iced Latte. The velvety embrace of a Latte, poured over ice, creating a refreshing delight that's perfect for warm days.",
      "price": 4.69,
      "sale": true,
      "img": "/c4.jpg"
    },
    {
      "id": 10,
      "name": "Turkish Coffee",
      "description": "Embark on a cultural journey with our Turkish Coffee. Rich, unfiltered, and aromatic, it's a tradition steeped in history and flavor.",
      "price": 4.99,
      "sale": false,
      "img": "/c5.jpg"
    }
  ]

  const content = data.map((el) => {
    return (
      <OrderCard key={el.id} el={el} />
    )
  })
  return (
    <div id='order' className=''>
      <div className=' fixed w-full z-50'>
        <Navbar />
      </div>
      <div className=' flex flex-col justify-center items-center mt-16 py-10 z-10'>
        <h1 className=' lg:text-3xl md:text-2xl text-xl px-2 text-center font-bold animate-fade '>Order your favourire coffee from your favourite blenders</h1>
        <div className=' grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-3 lg:px-20 md:px-10 px-4'>
          {content}
        </div>
        <footer class=" flex sticky bottom-0 w-full">
          <OrderBottom pay={false} />
        </footer>
      </div>
    </div>
  )
}
