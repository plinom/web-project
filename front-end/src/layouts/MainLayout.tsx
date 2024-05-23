import React from 'react'
import Header from '../components/Header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-gray-900 bg-white">
      <Header/>
      <div className='max-w-[1220px] w-[100%] mx-auto my-0 px-[10px]  relative h-screen'>
      {children}
    </div>
    </div>
  )
}

export default React.memo(MainLayout)
