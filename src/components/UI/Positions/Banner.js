import BackIcon from "@/components/icons/BackIcon";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className='w-full bg-[#F7F7FC] min-h-[300px]'
      style={{ background: `linear-gradient(125deg, rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 1) 75%, rgba( 34, 28, 91, 90) 100%` }}
    >
      <div className="w-11/12 md:w-3/4 mx-auto flex flex-col gap-16 justify-start pt-10">
        <Link href='/careers' >
          <BackIcon />
        </Link>
        <h1 className="text-4xl md:text-[56px] text-white font-semibold leading-[3rem] md:leading-[5rem]">
          Junior ios Developer
        </h1>
      </div>
    </section>
  );
};

export default Banner;