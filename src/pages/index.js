import Banner from '@/components/UI/Banner'
import JoinTeam from '@/components/UI/JoinTeam/JoinTeam'
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
