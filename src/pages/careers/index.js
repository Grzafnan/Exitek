import DynamicHead from "@/components/DynamicHead";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Careers/Banner";
import Offers from "@/components/UI/Careers/Offers";
import OpenPositions from "@/components/UI/Careers/OpenPositions";
import Head from "next/head";

const Careers = ({ jobs }) => {
  return (
    <>
      <DynamicHead
        title="Careers - Exitek"
        description="Exitek careers"
      />
      <Banner />
      <Offers />
      <OpenPositions jobs={jobs} />
    </>
  );
};

export default Careers;

Careers.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};


export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.CLIENT_URL}/api/jobs?collection=jobs`);
  const data = await res.json();
  return {
    props: {
      jobs: data.data
    },
    // revalidate: 60
  }
}


