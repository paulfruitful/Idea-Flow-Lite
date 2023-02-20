import React from 'react'
import Idea from './idea'
import { useState } from 'react'

const Ideas = ({ideas}) => {
   const [dummy,setDummy]=useState(['Me','DE', 'RE'])
  return (
    <div>
        {
            Array.from(dummy).map(element => {
              return <Idea name={element}/>
            })
}
      
        <Idea name={ideas}/>
              
 
    </div>
   
  )}


export default Ideas
