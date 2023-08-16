import UserIcon from "../icons/UserIcon";
import StarIcon from "../icons/StarIcon";
import GalleryIcon from "../icons/GalleryIcon";
import DownloadIcon from "../icons/DownloadIcon";


const stats = [
  {
    _id: '1',
    icon: <DownloadIcon />,
    title: "32 Million +",
    des: "Downloads worldwide"
  },
  {
    _id: '2',
    icon: <UserIcon />,
    title: "5 Million +",
    des: "Monthly active users"
  },
  {
    _id: '3',
    icon: <StarIcon />,
    title: "4.8",
    des: "App Store rating"
  },
  {
    _id: '4',
    icon: <GalleryIcon />,
    title: "2 Million +",
    des: "Photos processed daily"
  },

];
const Stats = () => {
  return (
    <div draggable="false" className="p-10 mx-auto w-5/6 md:w-3/4 md:px-6 lg:px-8 lg:py-8 rounded-[32px] -mt-20 bg-white shadow-2xl">
      <div draggable="false" className=" grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {
          stats?.map(stat => (
            <div key={stat?._id} className="flex flex-col gap-2 md:justify-center lg:items-start md:items-center">
              <div className="mb-1  flex justify-start w-10 h-10 rounded-full sm:w-12 sm:h-12">
                {stat?.icon}
              </div>

              <p className="font-extrabold text-2xl text-primary">{stat?.title}</p>
              <p className="-mt-2 text-lg text-gray font-medium leading-7">
                {stat?.des}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Stats;