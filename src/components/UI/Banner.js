import { banner } from "@/assets";

const Banner = () => {
  return (
    <section
      // min-h-[calc(100vh-80px)]
      className={`bg-cover bg-center w-full 
      min-h-screen`}
      style={{ backgroundImage: `url(${banner?.src})` }}
    >
      <div className="w-3/4 mx-auto text-center pt-10">
        <h1 className="text-4xl md:text-[56px] text-white font-semibold leading-[3rem] md:leading-[5rem]">
          Empowering Creativity and Beauty
        </h1>
        <h2 className=" text-4xl md:text-[56px] text-white font-semibold leading-[3rem] md:leading-[5rem]">
          with Innovative AI Products
        </h2>
        <p className="w-3/4 lg:w-2/4 mx-auto mt-6 text-gray text-center leading-8">
          Exitek is a leading software company that delivers cutting-edge beauty and creative solutions to a global clientele.
        </p>
      </div>
    </section>
  );
};

export default Banner;