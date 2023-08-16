import '@/styles/globals.css'
import Footer from '@/components/UI/Shared/Footer'
import Navbar from '@/components/UI/Shared/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-[#F7F7FC] max-w-[1440px] mx-auto '>
      <Navbar />
      {<Component {...pageProps} />}
      <Footer />
    </div>
  )
}
