import React from 'react'
import Hero from './hero'
import Idea from './idea'
import { useContext } from 'react'
import { DataContext } from '../App'
import { Link } from 'react-router-dom'
import Error from './snippets/Error'
const IdeaPool = () => {
const {ideas}=useContext(DataContext)
  return (
    <div>
    
     <div className='grid justify-items-center p-6 m-6'>
     <h1 className='text-3xl font-bold p-3'>Ideas Inspire Creativity</h1>
      <div className='flex flex-row flex-wrap'>
        {
        ideas?
          ideas.map( (element) => {
              
              return  <Idea name={element.title} key={element.id} author={element.author} tagline={element.tagline}/> 
            }) : <Error message="No Ideas Available"/>
}
      </div>
      </div>
    </div>
  )
}

export default IdeaPool
