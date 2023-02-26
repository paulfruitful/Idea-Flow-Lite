import React from 'react'
import Idea from './idea'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const Ideas = ({ideas}) => {
   let id=0
  return (
    <div className='grid justify-items-center p-6 m-6'>
      <h1 className='text-3xl font-bold p-3'>Idea News</h1>
      <div className='flex flex-row flex-wrap'>
        {
        ideas?
          ideas.map( (element) => {
              
              return <Link to={`/ideas/${element.id}`}> <Idea name={element.title} key={element.id} author={element.author} tagline={element.tagline}/></Link>            }) : 'No Idea'
}
      </div>
      
              
 
    </div>
   
  )}


export default Ideas
