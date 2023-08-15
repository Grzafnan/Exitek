import Banner from '@/components/UI/Banner'
import JoinTeam from '@/components/UI/Shared/JoinTeam/JoinTeam'
import Navbar from '@/components/UI/Shared/Navbar'
import Showcases from '@/components/UI/Shared/Showcases/Showcases'
import Stats from '@/components/UI/Stats'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`w-full ${inter.className} bg-[#F7F7FC] max-w-[1440px] mx-auto`}
    >
      <Navbar />
      <Banner />
      <Stats />
      <Showcases />
      <JoinTeam />
    </div>
  )
}
