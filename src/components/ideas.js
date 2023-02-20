import React from 'react'
import idea from './idea'

const ideas = ({ideas}) => {
  return (
    <div>
      {ideas.forEach(idea => {
        <idea idea={idea.title}/>
      })}
    </div>
  )
}

export default ideas
