import React from 'react';

const Banner = () => {
  return (
    <section
      className='w-full bg-[#F7F7FC] min-h-[450px]'
      style={{ background: `linear-gradient(35deg, rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 1) 75%, rgba( 34, 28, 91, 90) 100%` }}
    >
      <div className="w-11/12 md:w-3/4 mx-auto flex flex-col gap-6  items-center pt-10">
        <h1 className="text-4xl md:text-[56px] text-white text-center font-semibold leading-[3rem] md:leading-[5rem]">
          Be part of our mission
        </h1>
        <p className="w-4/5 lg:w-2/4 mx-auto text-gray text-center leading-8">
          We invite you to join us in a journey of innovation and creativity. Our mission is to revolutionize the way people edit and transform visuals using the power of AI technology.
        </p>
        <button className="w-44 inline-flex items-center justify-center h-12 px-6 tracking-wide font-semibold text-white hover:text-primary transition duration-200 rounded-full shadow-md bg-secondary hover:bg-white border border-secondary focus:shadow-outline focus:outline-none">
          View openings
        </button>
      </div>
    </section>
  );
};

export default Banner;