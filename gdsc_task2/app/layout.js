import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flopify",
  description: "gdsc task2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-zinc-900 min-h-screen'}>
      <meta name="google-site-verification" content="ZanZp2jzilR8H506i_IQEgoqTVfmLOuqRep7VaHOTmA" />
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
