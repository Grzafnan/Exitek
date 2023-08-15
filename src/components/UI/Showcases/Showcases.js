import Image from 'next/image';
import { showcase1, showcase2, showcase3, showcase4 } from "@/assets";
import ShowcaseOne from './ShowcaseOne';
import ShowcaseTwo from './ShowcaseTwo';


const project1 = {
  title: "Body Editor",
  image: showcase1,
  des: "Our groundbreaking technology empowers individuals of all backgrounds to effortlessly transform their bodies to perfection. With our user-friendly interface, no prior skills or expertise are required.",
}

const project2 = {
  title: "Magic Retouch",
  image: showcase2,
  des: "Effortlessly make your selfies shine with natural-looking enhancements that exude professionalism and charm.",
}

const project3 = {
  title: "Magic Protection",
  image: showcase3,
  des: "Our advanced technology seamlessly integrates body adjustments while expertly safeguarding the background from any distortions.",
}

const project4 = {
  title: "Body Editor",
  image: showcase4,
  des: "Our groundbreaking technology empowers individuals of all backgrounds to effortlessly transform their bodies to perfection. With our user-friendly interface, no prior skills or expertise are required.",
}

const Showcases = () => {
  return (
    <section className='py-20 flex flex-col space-y-10'>
      <ShowcaseOne title={project1.title} image={project1.image} des={project1.des} />
      <ShowcaseTwo title={project2.title} image={project2.image} des={project2.des} />
      <ShowcaseOne title={project3.title} image={project3.image} des={project3.des} />
      <ShowcaseTwo title={project4.title} image={project4.image} des={project4.des} />
    </section>
  );
};

export default Showcases;