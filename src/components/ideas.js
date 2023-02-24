import React from 'react'
import Idea from './idea'
import { useState } from 'react'


const idea=[
  {id:1,title:'Fine'}, {id:2, title:'Fine'},{id:3,title:'Fine'}
]

const Ideas = ({ideas}) => {
   let id=0
  return (
    <div className='grid justify-items-center p-6 m-6'>
      <h1 className='text-xl font-bold p-3'>Idea News</h1>
        {
        ideas?
          ideas.map( (element) => {
              
              return <Idea name={element.title} key={element.id} author={element.author} tagline={element.tagline}/>
            }) : 'No Idea'
}
      
      
              
 
    </div>
   
  )}


export default Ideas
