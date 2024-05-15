import React from 'react';
import img from "../Images/logo.jpg";

const MyPageHero = () => {
  return (
    <div className=" bg-white dark:bg-gray-900">
      <div className="container my-10 flex flex-col lg:flex-row items-center justify-center ">
        <div className="lg:w-1/2  flex justify-center">
          <img src={img} alt="mockup" className="w-64 h-64 rounded-full" />
        </div>
        <div className="lg:w-1/2 lg:mr-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hello, Anna Kalash</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Below you can see your results</p>
        </div>
      </div>
    </div>
  );
}

export default MyPageHero;