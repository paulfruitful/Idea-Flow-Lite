import React from 'react'
import Idea from './idea'
import { Link } from 'react-router-dom'




const Ideas = ({ideas}) => {
   let id=0
  return (
    <div className='grid justify-items-center p-6 m-6'>
      <h1 className='text-3xl font-bold p-3'>Idea News</h1>
      <div className='flex flex-row flex-wrap'>
        {ideas?ideas.map(idea=><Idea key={idea.id} name={idea.name} author={idea.author} tagline={idea.tagline}/>):'No Ideas'}
      
      </div>
      
              
 
    </div>
   
  )}


export default Ideas
