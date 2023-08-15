import Image from 'next/image';

const ShowcaseOne = ({ title, image, des }) => {
  return (
    <div className=' md:w-3/4 mx-auto'>
      <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4  md:gap-10'>
        <div className='md:-ml-10 w-full flex justify-center md:justify-start'>
          <Image alt='showcase-image' src={image?.src} width={400} height={600} />
        </div>
        <div className='w-full px-4'>
          <h3 className='text-primary text-4xl md:text-6xl font-bold'>{title}</h3>
          <p className='text-[#4E4B66] mt-1 md:text-justify'>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseOne;