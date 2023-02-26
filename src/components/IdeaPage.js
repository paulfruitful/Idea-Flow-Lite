import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import IdeaHero from './IdeaHero'

const IdeaPage = () => {
const [idea,setIdea]=useState(null)
const param=useParams()
const id=param.id

  //Get Ideas For The Idea Pool Component
  const getIdea=async()=>{
    const fetched= await fetch(`http://127.0.0.1:8000/api/ideas/${id}`)
    const result=await fetched.json()
    setIdea(result)
    
  }
  useEffect(()=>{
    getIdea()
  },[])

  return (
    <div>
        {
            idea?
        <IdeaHero title={idea.title} tagline={idea.tagline}/>:'No Such Idea'
        }
    </div>
  )
}

export default IdeaPage
