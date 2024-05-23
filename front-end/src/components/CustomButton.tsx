import React from 'react'

const CustomButton = ({ content }: { content: string }) => {
  return (
    <button
      type='submit'
      className='w-full bg-blue-500 text-center px-5 py-2 text-white rounded-md hover:bg-blue-400 transition ease-in-out'
    >
      {content}
    </button>
  )
}

export default React.memo(CustomButton)
