import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Landing Page',
  description: 'task for synapse',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
