import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p- 10">
      <Landing />
      <Features />
      <Reviews />
      <Footer />
    </main>
  )
}
