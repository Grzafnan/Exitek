import { useState } from "react";
import UploadIcon from "@/components/icons/UploadIcon";
import Link from "next/link";

const ContactForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="w-full mb-20">
      <div className="w-11/12 lg:w-3/4 mx-auto bg-white py-10 px-6 md:px-10 lg:px-20 rounded-[32px] shadow-2xl">
        <h1 className="text-4xl md:text-[56px] text-primary text-center font-semibold leading-[3rem] md:leading-[5rem]">
          Join the team
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 mt-8">
          <label
            htmlFor="FullName"
            className="relative block overflow-hidden rounded-lg border border-border-bg px-3 pt-3  focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary"
          >
            <input
              type="text"
              id="FullName"
              placeholder="Full Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              Full Name
            </span>
          </label>
          <label
            htmlFor="Email"
            className="relative block overflow-hidden rounded-lg border border-border-bg px-3 pt-3  focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              Email
            </span>
          </label>
          <label
            htmlFor="Message"
            className="relative block rounded-lg px-2 pt-3 border border-border-bg  focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary"
          >
            <textarea
              id="Message"
              className="relative peer w-full pl-1 pt-2 overflow-hidden rounded-lg border-none bg-transparent  placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              rows="4"
              placeholder="Enter any message..."
            ></textarea>
            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              Message
            </span>
          </label>

          <div
            className="relative w-full bg-white border border-border-bg rounded-lg transparent"
          >
            <input
              onChange={(e) => setSelectedFile(e.target.files[0])}
              type="file"
              name="resume"
              id="resume"
              className="absolute mt-2 w-full cursor-pointer overflow-hidden opacity-0"
            />
            <label htmlFor="file-2" className="w-full text-gray text-sm flex justify-between item-center px-3 py-2 overflow-hidden overflow-ellipsis cursor-pointer whitespace-nowrap"
            >
              <span className="cursor-pointer">
                {selectedFile ? selectedFile.name : 'Resume (optional)'}
              </span>

              <UploadIcon />
            </label>
          </div>

          <div className="">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-border-bg bg-white "
              />
              <span className="text-sm text-gray">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>
          <div className="">
            <p className="text-sm text-gray">
              By filling in this form you agree to the processing of your personal data by Exitek. Provided data is processed for recruitment purposes. You can withdraw your consent to the processing of your personal data at any time. For more information on your rights and data processing please read our <Link href="/" className="text-gray underline">
                terms and conditions
              </Link> and <Link href="/" className="text-gray-700 underline">privacy policy</Link>.
            </p>
          </div>

          <div className="w-full mx-auto flex justify-center items-center gap-4">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-full border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-secondary focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>
          </div>


        </form>
      </div>
    </section>
  );
};

export default ContactForm;