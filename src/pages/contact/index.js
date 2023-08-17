import RootLayout from '@/components/Layouts/RootLayout';
import MessageIcon from '@/components/icons/MessageIcon';
import RightArrowIcon from '@/components/icons/RightArrowIcon';
import React from 'react';

const Contact = () => {
  return (
    <section
      className='-mt-[76px] w-full flex justify-center items-center bg-gradient-to-br from-primary from-10% via-[] via-70% to-[#221C5B] to-90% min-h-[60vh] md:min-h-[calc(100vh-176px)] lg:min-h-[calc(100vh-176px)]'
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-20">
        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start'>
          <h1 className="text-4xl md:text-[56px] text-white font-semibold leading-[3rem] md:leading-[5rem]">
            Let’s talk
          </h1>
          <p className=" text-gray leading-8">
            Got a question about Exitek? Let us know.
          </p>
        </div>
        <div className="w-full">
          <form className="form relative">
            <span className='absolute  ml-6 mt-[14px]'>
              <MessageIcon />
            </span>
            <input type="email" className="w-full bg-primary text-white text-sm px-14 py-4 rounded-full outline-none border border-primary focus:border-secondary" placeholder="Email" required />
            <button type='submit' className='absolute cursor-pointer -ml-16 mt-[10px]'>
              <RightArrowIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};
