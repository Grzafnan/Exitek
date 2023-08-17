import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { pathname } = useRouter();
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

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <li key={item.path}>
        <Link
          href={item.path}
          aria-label={item.label}
          title={item.label}
          className={`tracking-wide ${pathname === item.path && 'text-secondary'
            } transition-colors duration-200 ${scrollNavbar ? ' hover:text-secondary' : 'text-gray hover:text-secondary'
            }`}
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header className={`${scrollNavbar ? "bg-deep-white text-primary" : "bg-transparent text-gray"} font-medium w-full  top-0 sticky h-[76px] z-50 duration-200 ease-in-out`}>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className={`text-2xl font-bold tracking-wide uppercase ${scrollNavbar ? "text-primary" : "text-white"}`}>
              Exitek
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            {renderMenuItems()}
            <li>
              <Link
                href="/"
                className={`inline-flex items-center justify-center h-10 px-6 tracking-wide ${scrollNavbar
                  ? 'text-white hover:text-white bg-secondary hover:bg-primary'
                  : 'text-primary hover:text-white bg-white hover:bg-secondary'
                  } transition duration-200 rounded-full`}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                        <span className="text-2xl font-bold text-primary tracking-wide uppercase">
                          Exitek
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded bg-red-500 hover:bg-secondary focus:bg-secondary focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                    <ul className="flex flex-col  items-center space-y-4">
                      {
                        menuItems?.map(menu => (
                          <li key={menu?.path}>
                            <Link
                              href={menu?.path}
                              aria-label="Home"
                              title="Home"
                              className={`tracking-wide transition-colors duration-200 ${menu?.path === pathname ? "text-secondary" : "text-primary hover:text-secondary"}`}
                            >
                              {menu?.label}
                            </Link>
                          </li>
                        ))
                      }
                      <li className='w-full'>
                        <Link
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-primary transition duration-200 rounded-xl shadow-md bg-white hover:text-white hover:bg-secondary border border-secondary focus:shadow-outline focus:outline-none"
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
  );
};

export default Navbar;