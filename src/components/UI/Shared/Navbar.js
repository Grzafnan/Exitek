import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const changeNavBackground = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 76) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground);
    return () => {
      window.removeEventListener('scroll', changeNavBackground);
    };
  }, []);

  return (
    <header className={`${scrollNavbar ? "bg-deep-white text-primary" : "bg-transparent text-gray"} w-full  top-0 sticky h-[76px] z-50 duration-300 ease-in-out`}>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Exitek
            </span>
          </Link>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                aria-label="Home"
                title="Home"
                className={`tracking-wide  ${scrollNavbar ? "hover:text-secondary" : "hover:text-white"} transition-colors duration-200 hover:text-teal-accent-400`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                aria-label="About Us"
                title="About Us"
                className={`tracking-wide  ${scrollNavbar ? "hover:text-secondary" : "hover:text-white"} transition-colors duration-200 hover:text-teal-accent-400`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                aria-label="Careers"
                title="Careers"
                className={`tracking-wide  ${scrollNavbar ? "hover:text-secondary" : "hover:text-white"} transition-colors duration-200 hover:text-teal-accent-400`}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                aria-label="Contact Us"
                title="Contact Us"
                className={`tracking-wide  ${scrollNavbar ? "hover:text-secondary" : "hover:text-white"} transition-colors duration-200 hover:text-teal-accent-400`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`inline-flex items-center justify-center h-10 px-6 tracking-wide  ${scrollNavbar ? "text-white hover:text-white bg-secondary hover:bg-primary" : "text-primary hover:text-white bg-white hover:bg-secondary "} transition duration-200 rounded-full`}
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className={`w-5 ${scrollNavbar ? "text-primary" : "text-white"}`} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span className="text-xl font-bold tracking-wide uppercase">
                          Exitek
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded bg-red-500 hover:bg-secondary focus:bg-secondary focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/"
                          aria-label="Home"
                          title="Home"
                          className="tracking-wide text-gray-700 transition-colors duration-200 text-primary"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          aria-label="About Us"
                          title="About Us"
                          className="tracking-wide text-gray-700 transition-colors duration-200 text-primary"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          aria-label="Careers"
                          title="Careers"
                          className="tracking-wide text-gray-700 transition-colors duration-200 text-primary"
                        >
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          aria-label="Contact Us"
                          title="Contact Us"
                          className="tracking-wide text-gray-700 transition-colors duration-200 text-primary"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-primary transition duration-200 rounded-xl shadow-md bg-white hover:bg-secondary border border-secondary focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>

    // <header class="px-[15px] z-10 sticky top-0 py-[30px]" id="header_style">
    //   <div class="container mx-auto">
    //     <div class="flex justify-between items-center">
    //       <Link href="/">
    //         Home
    //       </Link>
    //       <div class="hidden lg:block">
    //         <ul class="flex gap-[34px] font-poppins">
    //           <li class="navitem_style"><Link href="/">Why Aide?</Link></li>
    //           <li class="navitem_style"><Link href="/">Solutions</Link></li>
    //           <li class="navitem_style"><Link href="/">Teams</Link></li>
    //           <li class="navitem_style"><Link href="career.html">Career</Link></li>
    //           <li class="navitem_style"><Link href="contact.html">Contact</Link></li>
    //         </ul>
    //       </div>
    //       <div class="relative hidden lg:block">
    //         <Link href="/" class="font-roboto text-sm leading-[17.92px] tracking-[11.5%] font-bold text-[#666] py-[10px] px-[14px] border border-[#666] rounded-full shadow-btn-shadow transition-all duration-300 hover:border-border-bg hover:bg-aide-theme ${scrollNavbar ? "hover:text-gray" : "hover:text-white"} scale-100 hover:scale-90">Talk to an expert</Link>
    //         {/* <div class="absolute w-[101px] font-preahvihear font-normal text-[11px] leading-[128%] tracking-[0.115em] text-black -rotate-[15deg] top-[75px] -left-[45px] z-20" id="talkToExpert">
    //            <img class="w-[20px] absolute -top-[35px] left-[35%]" src="./assets/images/carv-arrow-drawing.png" alt="carv icon" /> 
    //           <p>You are just one step away</p>
    //         </div> */}
    //       </div>

    //       <div class="lg:hidden cursor-pointer text-aide-theme" onclick="openSidebar()">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="currentColor" /></svg>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="fixed w-full left-0 z-30 bg-black/60 -translate-x-full duration-200 ease-in-out inset-y-0 transform transition mobile_menu_wrapper">
    //     <div class="w-[300px] h-full bg-aide-theme pl-10 pt-5">
    //       <div class="text-white flex justify-end cursor-pointer mr-5 group mobile_menu_btn" onclick='openSidebar()'>
    //         <svg class="rotate-0 group-hover:rotate-90 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor" /></svg>
    //       </div>
    //       <ul class="flex flex-col gap-2 font-poppins pt-10">
    //         <li class="mobile_navitem_style"><Link href="/">Why Aide?</Link></li>
    //         <li class="mobile_navitem_style"><Link href="/">Solutions</Link></li>
    //         <li class="mobile_navitem_style"><Link href="/">Teams</Link></li>
    //         <li class="mobile_navitem_style"><Link href="career.html">Career</Link></li>
    //         <li class="mobile_navitem_style"><Link href="contact.html">Contact</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Navbar;