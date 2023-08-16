import BookIcon from "@/components/icons/BookIcon";
import DollarIcon from "@/components/icons/DollarIcon";
import HomeIcon from "@/components/icons/HomeIcon";

const offers = [
  {
    _id: "1",
    icon: <HomeIcon />,
    title: "Fully Remote Working",
    des: "We are a remote-first organization and offer you the chance to work from wherever you want as."
  },
  {
    _id: "2",
    icon: <DollarIcon />,
    title: "Competitive salary",
    des: "We believe that when you are rewarded fairly for your hard work, it motivates you to reach new heights of success and innovation."
  },
  {
    _id: "3",
    icon: <BookIcon />,
    title: "Learning opportunities",
    des: "We offer a wide range of comprehensive learning opportunities to expand your skills, broaden your knowledge."
  },
]

const Offers = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <h2 className="text-4xl text-center text-primary font-extrabold ">What we offer you</h2>
      <div>
        {
          offers?.map(offer => (
            <div key={offer?._id} className="md:w-4/6 mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 mt-16">
              {offer?.icon}
              <div className="text-center lg:text-start">
                <h3 className="font-semibold text-2xl text-primary mb-3">{offer?.title}</h3>
                <p className="text-lg text-gray font-normal leading-7">{offer?.des}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Offers;