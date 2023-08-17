import DynamicHead from '@/components/DynamicHead';
import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Positions/Banner';
import ContactForm from '@/components/UI/Positions/ContactForm';
import Description from '@/components/UI/Positions/Description';

const Position = () => {
  return (
    <>
      <DynamicHead
        title="Career dynamic"
        description="Exitek dynamic career"
      />
      <Banner />
      <Description />
      <ContactForm />
    </>
  );
};

export default Position;


Position.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};
