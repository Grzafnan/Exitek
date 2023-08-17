const Description = ({ job }) => {
  return (
    <article className=' bg-deep-white text-primary my-10 px-6 md:px-24 lg:px-48'>
      <p className='mb-10'>
        {job?.jobDescription}
      </p>
      <div>
        <h4 className='text-2xl font-semibold'>{job?.workTitle}:</h4>
        <ul className='list-[disc] px-6 mb-10'>
          {
            job?.workToDo?.map((work, idx) => (
              <li key={idx}>{work}.</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h4 className='text-2xl font-semibold'>{job?.requirementTitle}:</h4>
        <ul className='list-[disc] px-6 mb-10'>
          {
            job?.workRequirements?.map((requirement, idx) => (
              <li key={idx}>{requirement}.</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h4 className='text-2xl font-semibold'>{job?.offerTitle}:</h4>
        <ul className='list-[disc] px-6 mb-10'>
          {
            job?.offersDetails?.map((detail, idx) => (
              <li key={idx}>{detail}.</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h4 className='text-2xl font-semibold'>Location:</h4>
        <ul className='list-[disc] px-6 mb-10'>
          <li>{job?.location}.</li>
        </ul>
      </div>
      <div>
        <h4 className='text-2xl font-semibold'>Salary:</h4>
        <ul className='list-[disc] px-6 mb-10'>
          <li>{job?.salary}.</li>
        </ul>
      </div>
    </article>
  );
};

export default Description;