import React from 'react'

export const RequiredHandler = ({
  content,
}: {
  content: string | undefined
}) => {
  return <p className='text-[10px] text-red-600'>{content}</p>
}
