import DynamicHead from '@/components/DynamicHead';
import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/About/Banner';
import Values from '@/components/UI/About/Values';
import Works from '@/components/UI/About/Works';
import JoinTeam from '@/components/UI/JoinTeam/JoinTeam';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <DynamicHead
        title="About - Exitek"
        description="Exitek about"
      />
      <Banner />
      <Works />
      <Values />
      <JoinTeam />
    </>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};
