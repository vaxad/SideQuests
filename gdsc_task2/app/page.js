"use client"
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";
import { useEffect, useState } from "react";

export default function Home() {

  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <main className=" flex flex-col h-screen justify-center items-cente lg:px-32 md:px-24 px-12 gap-10">
      {user && <h3 className=" text-2xl font-medium w-full text-center py-3"> Welcome {user.displayName}</h3>}
      <h1 className=' lg:text-5xl md:text-3xl text-2xl  font-extrabold text-center lg:px-24 md:px-8 px-4 '>Buy 100% authentic products fetched directly from<span className=' text-blue-600 cursor-pointer '> FakeProducts API</span> </h1>
      <div className=' flex lg:flex-row md:flex-row flex-col gap-10 justify-center items-center py-8'>
        <Link href={'/products'} className=' px-4 py-3 text-xl font-semibold bg-blue-800 hover:bg-blue-400 transition-all rounded-lg'>View Products</Link>
        <a href="https://github.com/vaxad/gdsc_task2" target="_blank" className=' px-4 py-3 text-xl font-semibold bg-blue-800 hover:bg-blue-400 transition-all rounded-lg'>Visit Repository</a>
      </div>
    </main>
  )
}
