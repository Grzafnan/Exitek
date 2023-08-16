import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <section
      className='w-full min-h-[450px]  bg-gradient-to-br from-primary from-10% via-[] via-70% to-[#221C5B] to-100%'
    >
      <div className="w-11/12 md:w-3/4 mx-auto flex flex-col gap-6  items-center pt-10">
        <h1 className="text-4xl md:text-[56px] text-white text-center font-semibold leading-[3rem] md:leading-[5rem]">
          Be part of our mission
        </h1>
        <p className="w-4/5 lg:w-2/4 mx-auto text-gray text-center leading-8">
          We invite you to join us in a journey of innovation and creativity. Our mission is to revolutionize the way people edit and transform visuals using the power of AI technology.
        </p>
        <Link href='#position' className="w-44 inline-flex items-center justify-center h-12 px-6 tracking-wide font-semibold text-white hover:text-secondary transition duration-200 rounded-full  bg-secondary hover:bg-white border border-secondary hover:border-white  focus:shadow-outline focus:outline-none">
          View openings
        </Link>
      </div>
    </section>
  );
};

export default Banner;