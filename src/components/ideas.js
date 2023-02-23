import React from 'react'
import Idea from './idea'
import { useState } from 'react'

const Ideas = ({ideas}) => {
   let id=0
  return (
    <div>
        {
            Array.from(ideas).map( (element,id) => {
              id++
              return <Idea name={element.title} key={id}/>
            })
}
      
        <Idea name={ideas}/>
              
 
    </div>
   
  )}


export default Ideas
