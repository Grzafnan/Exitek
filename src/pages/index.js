import Banner from '@/components/UI/Banner'
import Footer from '@/components/UI/Shared/Footer'
import JoinTeam from '@/components/UI/JoinTeam/JoinTeam'
import Navbar from '@/components/UI/Shared/Navbar'
import Showcases from '@/components/UI/Showcases/Showcases'
import Stats from '@/components/UI/Stats'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <Showcases />
      <JoinTeam />
    </>
  )
}
