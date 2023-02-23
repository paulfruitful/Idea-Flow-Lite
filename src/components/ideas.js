import React from 'react'
import Idea from './idea'
import { useState } from 'react'


const idea=[
  {id:1,title:'Fine'}, {id:2, title:'Fine'},{id:3,title:'Fine'}
]

const Ideas = ({ideas}) => {
   let id=0
  return (
    <div>
        {
          idea.forEach( (element) => {
              
              return <Idea name={element.title} key={element.id}/>
            })
}
      
        <Idea name={ideas}/>
              
 
    </div>
   
  )}


export default Ideas
