import DynamicHead from '@/components/DynamicHead';
import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Positions/Banner';
import ContactForm from '@/components/UI/Positions/ContactForm';
import Description from '@/components/UI/Positions/Description';

const Position = ({ job }) => {
  return (
    <>
      <DynamicHead
        title={`${job.job} - Career`}
        description={job?.jobDescription}
      />
      <Banner title={job?.job} />
      <Description job={job} />
      <ContactForm />
    </>
  );
};

export default Position;


Position.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
};


export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${process.env.CLIENT_URL}/api/jobs/?collection=jobs&id=${params.id}`
  )
  const job = await res.json();
  return {
    props: {
      job: JSON.parse(JSON.stringify(job.data))
    }
  }
}