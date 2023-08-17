import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Careers/Banner";
import Offers from "@/components/UI/Careers/Offers";
import OpenPositions from "@/components/UI/Careers/OpenPositions";

const Careers = () => {
  return (
    <div className="">
      <Banner />
      <Offers />
      <OpenPositions />
    </div>
  );
};

export default Careers;

Careers.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};
