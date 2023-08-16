import ErrorMan from '@/components/icons/ErrorMan';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <ErrorMan />
        <h1
          className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Uh-oh!
        </h1>
        <p className="mt-4 text-gray-500">We cant find that page.</p>
        <Link href='/' className="w-44 inline-flex items-center justify-center h-10 px-6 mt-5 tracking-wide font-semibold text-white hover:text-secondary transition duration-200 rounded-full shadow-md bg-secondary hover:bg-white border border-secondary focus:shadow-outline focus:outline-none">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;