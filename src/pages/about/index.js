import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/About/Banner';
import Values from '@/components/UI/About/Values';
import Works from '@/components/UI/About/Works';
import JoinTeam from '@/components/UI/JoinTeam/JoinTeam';

const About = () => {
  return (
    <div>
      <Banner />
      <Works />
      <Values />
      <JoinTeam />
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};
