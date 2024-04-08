import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[1220px] w-[100%] mx-auto my-0 px-[10px] relative h-screen'>
      {children}
    </div>
  )
}

export default React.memo(MainLayout)
