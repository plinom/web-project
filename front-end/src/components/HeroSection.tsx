import React from 'react';
import beerman from '../Images/ganteli.jpg';

const HeroSection = () => {
  return (
    <div className='h-100vh'>
      <section className="bg-white dark:bg-gray-900 h-full">
        <div className="grid max-w-screen-xl px-0 py-0 mx-auto lg:gap-0 xl:gap-0 lg:py-0 lg:grid-cols-12 h-full">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Get ready for summer with us!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">You should be able to carry two pallets of beer for your friends.<br/>Start improving now</p>
            <a href="/auth" className=" bg-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
            </a>
            <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              I have an account
            </a>
          </div>
          <div className="hidden lg:block lg:col-span-5 lg:w-full">
            <img src={beerman} alt="mockup" className="w-screen h-100% pr-3 object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
