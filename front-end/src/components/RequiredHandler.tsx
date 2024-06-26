import React from 'react'

const RequiredHandler = ({ content }: { content: string | undefined }) => {
  return <p className='text-[10px] text-red-600'>{content}</p>
}

export default React.memo(RequiredHandler)
