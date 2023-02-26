import React from 'react'
import Hero from './hero'
import Idea from './idea'

const IdeaPool = ({ideas}) => {
  return (
    <div>
     <Hero/>
     <div className='grid justify-items-center p-6 m-6'>
     <h1 className='text-3xl font-bold p-3'>Idea News</h1>
      <div className='flex flex-row flex-wrap'>
        {
        ideas?
          ideas.map( (element) => {
              
              return <Idea name={element.title} key={element.id} author={element.author} tagline={element.tagline}/>
            }) : 'No Idea'
}
      </div>
      </div>
    </div>
  )
}

export default IdeaPool
