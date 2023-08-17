import '@/styles/globals.css'
import Footer from '@/components/UI/Shared/Footer'
import Navbar from '@/components/UI/Shared/Navbar'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
