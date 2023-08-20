import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="pt-20 m-auto max-w-[1536px] p-2">
        <Component {...pageProps} />
      </div>
      <div className="pt-20 m-auto max-w-[1536px] p-2">
        <Footer />
      </div>
    </>
  )
}
