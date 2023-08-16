import Link from 'next/link';
import ClockIcon from '@/components/icons/ClockIcon';
import LocationIcon from '@/components/icons/LocationIcon';

const positions = [
  {
    _id: '1',
    job: "Junior iOS Developer",
    type: "Full-time",
    location: "100% Remote"
  },
  {
    _id: '2',
    job: "Graphic Designer",
    type: "Part-time",
    location: "100% Remote"
  },
  {
    _id: '3',
    job: "Marketing Specialist",
    type: "On-site",
    location: "Pabna, Rajshahi"
  }
]


const OpenPositions = () => {
  return (
    <section id='position' className='py-20 px-6'>
      <h2 className="text-4xl text-center text-primary font-extrabold mb-20 ">Open positions</h2>
      <div className='flex flex-col gap-8'>
        {
          positions?.map(position => (
            <div key={position?._id} className='w-full md:w-3/4 mx-auto bg-white flex flex-col md:flex-row justify-between items-center gap-4 p-8 rounded-[16px] shadow-2xl'>
              <div>
                <h4 className="font-semibold text-2xl text-primary mb-3">Junior iOS Developer</h4>
                <p className="flex space-x-4  text-lg text-gray font-normal leading-7">
                  <span className='flex items-center gap-1'>
                    <LocationIcon />
                    <span className='text-sm'>{position.location}</span>
                  </span>
                  <span className='flex items-center gap-1'>
                    <ClockIcon />
                    <span className='text-sm'>{position.type}</span>
                  </span>
                </p>
              </div>
              <Link href={`/careers/${position?._id}`} className="w-5/6 md:w-44 inline-flex items-center justify-center h-12 px-6 tracking-wide font-semibold text-secondary hover:text-white transition duration-200 rounded-full shadow-md bg-white hover:bg-secondary border border-secondary focus:shadow-outline focus:outline-none">Apply</Link>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default OpenPositions;