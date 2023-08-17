import BackIcon from "@/components/icons/BackIcon";
import Link from "next/link";

const Banner = ({ title }) => {
  return (
    <section
      className='-mt-[76px] w-full min-h-[360px]'
      style={{ background: `linear-gradient(125deg, rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 1) 75%, rgba( 34, 28, 91, 90) 100%` }}
    >
      <div className="pt-28 w-11/12 md:w-3/4 mx-auto flex flex-col gap-16 justify-start ">
        <Link href='/careers' >
          <BackIcon />
        </Link>
        <h1 className="md:ml-3 text-3xl md:text-[56px] text-white font-semibold leading-[3rem] md:leading-[5rem]">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Banner;