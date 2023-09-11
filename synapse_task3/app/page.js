import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Home from './components/Home'

export default function LandingPage() {
  return (
    <main className="">
      <Home />
      <About />
      <Testimonials />
      <Contact />
    </main>
  )
}
