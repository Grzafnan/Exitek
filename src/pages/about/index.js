import React from 'react';

const About = () => {
  return (
    <section
      className='w-full bg-[#F7F7FC] max-w-[1440px] mx-auto min-h-[700px]'
      style={{ background: `linear-gradient(180deg, rgba(34, 28, 91, 0.60) 0%, rgba(34, 28, 91, 90) 100%)` }}
    >
      <div className="w-3/4 mx-auto text-center pt-10">
        <h1 className="text-4xl md:text-6xl text-white font-semibold leading-[3rem] md:leading-[5rem]">
          Empowering Creativity and Beauty
          with Innovative AI Products
        </h1>
        <p className="w-3/4 lg:w-2/4 mx-auto mt-6 text-gray text-center leading-8">
          Exitek is a leading software company that delivers cutting-edge beauty and creative solutions to a global clientele.
        </p>
      </div>
    </section>
  );
};

export default About;