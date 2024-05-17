import React from 'react'
import For from '../components/Form2'
import Graphs from '../components/Graphs'
import Header from '../components/Header'
import MyPageHero from '../components/MyPageHero'

const MyPage = () => {
  return (
    <div className='bg-gray-900'>
      <Header />
      <MyPageHero />
      <div className='pb-10'>
        <Graphs />
        <For />
      </div>
    </div>
  )
}

export default MyPage
