import LightIcon from '@/components/icons/ LightIcon';
import GrowthArrow from '@/components/icons/GrowthArrow';
import VisionIcon from '@/components/icons/VisionIcon';

const works = [
  {
    _id: "1",
    icon: <LightIcon />,
    title: "Innovation Pioneers",
    des: "Our team comprises a dynamic group of forward-thinking individuals who are driven by an insatiable passion for both technology and creativity.",
  },
  {
    _id: "2",
    icon: <GrowthArrow />,
    title: "Remarkable growth",
    des: "Created in 2020, Plasma is profitable and used by millions every month. We have the foundations and ambition to build a healthy fast-growing company.",
  },
  {
    _id: "3",
    icon: <VisionIcon />,
    title: "Creative visionaries",
    des: "Our diverse team of artists, developers, and visionaries collaborates seamlessly to create tools that empower creators worldwide.",
  }
]

const Works = () => {
  return (
    <section className='w-11/12 mx-auto bg-white py-10 px-6 md:p-16  my-16 md:my-20 mb-8 rounded-[32px] shadow-2xl'>
      <h1 className="text-4xl md:text-5xl text-primary font-semibold">
        Who we are
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
        {
          works?.map(work => (
            <div key={work?._id} className="flex flex-col gap-2 md:justify-center lg:items-start md:items-center">
              <div className="mb-1 flex justify-start w-10 h-10 rounded-full sm:w-12 sm:h-12">
                {work?.icon}
              </div>

              <h2 className="font-extrabold text-2xl text-primary">{work?.title}</h2>
              <p className=" text-lg text-gray font-normal leading-7">
                {work?.des}
              </p>
            </div>)
          )}
      </div>
    </section>
  );
};

export default Works;