import '@/styles/globals.css'
import Footer from '@/components/UI/Shared/Footer'
import Navbar from '@/components/UI/Shared/Navbar'

export default function App({ Component, pageProps }) {
  return (
    // bg-[#F7F7FC]
    <div className='relative bg-[#F7F7FC] max-w-[1440px] mx-auto '>
      <Navbar />
      {<Component {...pageProps} />}
      <Footer />
    </div>
  )
}
