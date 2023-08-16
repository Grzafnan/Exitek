import Banner from "@/components/UI/Careers/Banner";
import Offers from "@/components/UI/Careers/Offers";
import OpenPositions from "@/components/UI/Careers/OpenPositions";

const index = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto ">
      <Banner />
      <Offers />
      <OpenPositions />
    </div>
  );
};

export default index;