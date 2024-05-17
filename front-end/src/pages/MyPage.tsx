import React from 'react'
import For from '../components/Form2'
import Graphs from '../components/Graphs'
import Header from '../components/Header'
import MyPageHero from '../components/MyPageHero'
import Training from '../components/NormalTraining'

const MyPage = () => {
  return (
    <div className='dark:bg-gray-900 bg-white'>
      <Header />
      <MyPageHero />
      <div className='pb-10'>
        <Graphs />
        <For />
        <Training/>
      </div>
    </div>
  )
}

export default MyPage
