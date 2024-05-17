import React, { useState } from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import FormText from '../components/FormText'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import NormalTraining from '../components/NormalTraining'

const NormalLanding = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsFormSubmitted(true)
  }

  return (
    <div className='dark:bg-gray-900'>
      <Header />
      <HeroSection />
      <div className='grid grid-cols-2 gap-4 max-w-screen-xl mx-auto px-4 lg:px-0'>
        <div className='col-span-1 mr-20'>
          <Form onSubmit={handleSubmit} />
        </div>
        <div className='col-span-1 pl-20'>
          <FormText />
        </div>
      </div>
      {isFormSubmitted && <NormalTraining />}
      <Footer />
    </div>
  )
}

export default NormalLanding
