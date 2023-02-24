import React from 'react'

const Idea = ({name,author}) => {
  return (
    <div className='grid justify-self-center m-6 p-12 shadow-sm rounded-sm'>
     <div className='flex flex-col justify-self-stretch'>
      <h1 className='p-6 font-bold text-md'>{name}</h1>
      <h1 className='p-3 font-bold text-sm'>{author}</h1>
      </div>
    </div>
  )
}

export default Idea
