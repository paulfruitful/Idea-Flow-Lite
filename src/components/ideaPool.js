import React from 'react'
import Hero from './hero'
import Idea from './idea'
import { useContext } from 'react'
import { DataContext } from '../App'
import { Link } from 'react-router-dom'
const IdeaPool = () => {
const {ideas}=useContext(DataContext)
  return (
    <div>
     <Hero/>
     <div className='grid justify-items-center p-6 m-6'>
     <h1 className='text-3xl font-bold p-3'>Idea News</h1>
      <div className='flex flex-row flex-wrap'>
        {
        ideas?
          ideas.map( (element) => {
              
              return <Link to={`/ideas/${element.id}`}> <Idea name={element.title} key={element.id} author={element.author} tagline={element.tagline}/> </Link>
            }) : 'No Idea'
}
      </div>
      </div>
    </div>
  )
}

export default IdeaPool
