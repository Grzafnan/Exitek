const values = [
  {
    _id: "1",
    title: "Growth",
    des: "We are goal-orientated, effective and fast. We learn from our mistakes. Personal development is just as important as the development of the entire company."
  },
  {
    _id: "2",
    title: "Self-Responsibility",
    des: "We proactively take responsibility for our work and our teams. We foster trust and transparent communication. "
  },
  {
    _id: "3",
    title: "Collaboration",
    des: "Collaboration is at the core of our culture, fostering an environment where diverse perspectives are valued, and ideas are freely shared."
  }
];

const Values = () => {
  return (
    <div className="w-full pb-20 ">
      <div className="mt-10 relative">
        <p draggable="false" className="w-full flex justify-between text-[#00000009] text-8xl md:text-[13rem] font-[900] leading-tight">
          <span>E</span> <span>X</span> <span>I</span>  <span>T</span> <span>E</span> <span>K</span>
        </p>
        <h3 className="text-4xl md:text-[56px] text-primary font-semibold leading-[3rem] md:leading-[5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Our values
        </h3>
      </div>
      <div className="w-full">
        {
          values?.map(value => (
            <div key={value?._id} className=" flex flex-col md:flex-row justify-center md:items-center md:gap-10 mx-6 md:mx-32 border-b-[.03rem] border-gray border-opacity-50 py-10" >
              <h4 className="md:w-1/2 text-2xl text-primary font-semibold leading-[3rem] md:leading-[5rem]">{value?.title}</h4>
              <p className="md:w-1/2 text-gray text-justify leading-8">{value?.des}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};


export default Values;