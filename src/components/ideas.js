import React from 'react'
import Idea from './idea'
import { useState } from 'react'

const Ideas = ({ideas}) => {
   
  return (
    <div>
        {
            Array.from(ideas).map(element => {
              return <Idea name={element.title}/>
            })
}
      
        <Idea name={ideas}/>
              
 
    </div>
   
  )}


export default Ideas
