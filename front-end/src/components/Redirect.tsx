import React from 'react'
import { Link } from 'react-router-dom'

const Redirect = ({ path, content }: { path: string; content: string }) => {
  return (
    <Link
      className='underline pointer hover:text-blue-600 transition text-center'
      to={path}
    >
      {content}
    </Link>
  )
}

export default React.memo(Redirect)
