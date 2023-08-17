import Navbar from '../UI/Shared/Navbar';
import Footer from '../UI/Shared/Footer';


const RootLayout = ({ children }) => {
  return (
    <div className={`max-w-[1440px] mx-auto`}>
      <Navbar />
      <div className='relative bg-[#F7F7FC] '>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;