import Image from 'next/image';
import { aboutUs } from '@/assets';

const Banner = () => {
  return (
    <section className='-mt-[76px]'>
      <div
        className='w-full max-w-[1440px] mx-auto min-h-[720px] bg-gradient-to-br from-primary from-10% via-[] via-70% to-[#221C5B] to-100'
      >
        <div className="pt-28 w-11/12 md:w-3/4 mx-auto text-center">
          <h1 className="text-4xl md:text-[56px] text-white font-semibold leading-[3rem] md:leading-[5rem]">
            Innovating the future.
          </h1>
          <h2 className="text-4xl md:text-[56px] text-white font-semibold leading-[3rem] md:leading-[5rem]">
            Where imagination meets creation
          </h2>
          <p className="md:w-3/4 lg:w-2/4 mx-auto mt-6 text-gray text-center leading-8">
            Our mission is to empower creators with groundbreaking tools that unlock their creative potential, enabling them to turn their boldest ideas into reality.
          </p>

          <div className='md:w-4/6 lg:w-2/5 grid grid-cols-2 mx-auto lg:mx-0 lg:ml-auto gap-8 mt-8 lg:mt-28'>
            <div className='flex flex-col items-start'>
              <span className="font-extrabold text-2xl text-white">2020</span>
              <span className="text-sm text-gray font-medium leading-7">
                Company  founded
              </span>
            </div>
            <div className='flex flex-col items-start'>
              <span className="font-extrabold text-2xl text-white">11</span>
              <span className=" text-sm text-gray font-medium leading-7">
                Passionate people
              </span>
            </div>
            <div className='flex flex-col items-start'>
              <span className="font-extrabold text-2xl text-white">5 Million +</span>
              <span className=" text-sm text-gray font-medium leading-7">
                Monthly active users
              </span>
            </div>
            <div className='flex flex-col items-start'>
              <span className="font-extrabold text-2xl text-white">7</span>
              <span className=" text-sm text-gray font-medium leading-7">
                Created projects
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image className='-mt-10 mx-auto px-6 md:px-0 lg:-mt-60 lg:ml-16' draggable={false} alt='about-us' src={aboutUs.src} width={600} height={430} />
    </section>
  );
};

export default Banner;