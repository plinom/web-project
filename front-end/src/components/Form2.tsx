import React, { useState } from 'react'
import Graphs from './Graphs'
import { Link } from 'react-router-dom'


const Form = ({ onSubmit }) => {
  //const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('results',(localStorage.getItem('results')||"").split(',').slice(1).join(',') + ',' + isSubmitted)
    //Graphs.render()
    window.location.reload()
  }
  return (
    <div className='my-5 dark:bg-gray-900 mx-20'>
      <div className='relative z-0 w-1/4 mb-5 group'>
        <input
          type='number'
          min='0'
          max='150'
          name='age'
          id='age'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
          onChange={e => setIsSubmitted(e.target.value)}
        />
        <label
          htmlFor='Weight'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Weight
        </label>
      </div>
      
      <button
      
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleSubmit}
      >
        Submit
      </button>
      
    </div>
  )
}

export default Form
