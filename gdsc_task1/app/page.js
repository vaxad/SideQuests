"use client"
import useStore from "@/lib/zustand";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Featured from "./components/Featured";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function Home() {
  const { mode } = useStore()
  const [bg, setbg] = useState('bg-light text-dark')
  useEffect(() => {
    setbg(mode ? 'bg-light text-dark' : 'bg-dark text-light')
  }, [mode])

  return (
    <main className={`flex min-h-screen flex-col w-full ${bg}`}>
      <Navbar />
      <Featured />
      <Events />
      <Footer />
    </main>
  )
}
