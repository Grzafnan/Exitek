import Banner from '@/components/UI/Banner'
import Navbar from '@/components/UI/Shared/Navbar'
import Stats from '@/components/UI/Stats'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`w-full ${inter.className} max-w-[1440px] mx-auto`}
    >
      <Navbar />
      <Banner />
      <Stats />
    </div>
  )
}
