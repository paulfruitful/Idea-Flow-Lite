import React from 'react'
import { Link } from 'react-router-dom'

const Idea = ({id,name,author,tagline}) => {
  const link=`/ideas/${id}`
  return (
    <Link to={link}>
    <div className='grid justify-self-center m-6 p-12 shadow-lg rounded-sm'>
     <div className='grid justify-self-stretch'>
      <h1 className='justify-self-start text-blue-600 text-md'>{tagline}</h1>
      <h1 className='p-6 font-bold justify-self-center text-xl'>{name}</h1>
      <h1 className='p-3 font-bold text-sm justify-self-end'>By {author}</h1>
      </div>
    </div>
    </Link>
  )
}

export default Idea
