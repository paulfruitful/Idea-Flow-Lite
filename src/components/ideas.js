import React from 'react'
import Idea from './idea'
import { useState } from 'react'


const idea=[
  {title:'Fine'}, {title:'Fine'},{title:'Fine'}
]

const Ideas = ({ideas}) => {
   let id=0
  return (
    <div>
        {
          idea.forEach( (element) => {
              
              return <Idea name={element.title} />
            })
}
      
        <Idea name={ideas}/>
              
 
    </div>
   
  )}


export default Ideas
