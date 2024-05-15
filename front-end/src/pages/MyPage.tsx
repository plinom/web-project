import React from 'react';
import Header from '../components/Header';
import MyPageHero from '../components/MyPageHero';
import img from "../Images/logo.jpg";
import Graphs from '../components/Graphs';

const MyPage = () => {
  return (
    <div className='bg-gray-900'>
      <Header />
      <MyPageHero/>
      <div className='pb-10'>
      <Graphs/>
      </div>
    </div>
  );
}

export default MyPage;
