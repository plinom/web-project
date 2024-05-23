import React from 'react';

const Footer = () => {
  return (
    <div className=' bg-white dark:bg-gray-800 text-white flex flex-col items-center justify-center h-64 mt-8'>
      <div className="text-center mb-4">
        <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-4xl xl:text-4xl text-black dark:text-white">Get ready for summer with us!</h2>
      </div>
      <div>
        <a href="/auth" className="bg-gray-900 dark:bg-white mb-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white dark:text-gray-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Get started
        </a>
      </div>
    </div>
  );
}

export default Footer;
