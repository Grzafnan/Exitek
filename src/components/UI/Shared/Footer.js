import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-[11rem] bg-primary text-gray">
      <div className="flex flex-col md:flex-row items-center md:justify-between p-10 border-b-[.03rem] border-gray">
        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
          Exitek
        </span>

        <div className="">
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 mt-6 md:mt-0">
            <li>
              <Link
                href="/"
                aria-label="Home"
                title="Home"
                className="tracking-wide text-gray hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                aria-label="About Us"
                title="About Us"
                className="tracking-wide text-gray hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                aria-label="Careers"
                title="Careers"
                className="tracking-wide text-gray hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                aria-label="Contact Us"
                title="Contact Us"
                className="tracking-wide text-gray hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-6 text-xs text-center">© 2022-2023 EXITEK LTD. All rights reserved.</p>
    </footer>
  );
};

export default Footer;