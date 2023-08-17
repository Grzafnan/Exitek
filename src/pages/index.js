import DynamicHead from '@/components/DynamicHead'
import RootLayout from '@/components/Layouts/RootLayout'
import Banner from '@/components/UI/Banner'
import JoinTeam from '@/components/UI/JoinTeam/JoinTeam'
import Showcases from '@/components/UI/Showcases/Showcases'
import Stats from '@/components/UI/Stats'


export default function Home() {
  return (
    <>
      <DynamicHead
        title="Home - Exitek"
        description="This is official website of Exitek"
      />
      <Banner />
      <Stats />
      <Showcases />
      <JoinTeam />
    </>
  )
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};
