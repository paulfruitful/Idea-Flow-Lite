import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useLayoutEffect } from 'react'
import IdeaHero from './IdeaHero'
import Error from './snippets/Error'
import IdeaDescription from './IdeaDescription'

const IdeaPage = () => {
const [idea,setIdea]=useState(null)
const {id}=useParams()


  //Get Ideas For The Idea Pool Component
  const getIdea=async()=>{
    const fetched= await fetch(`http://127.0.0.1:8000/api/ideas/${id}`)
    const result=await fetched.json()
    setIdea(result)
    
  }
  useLayoutEffect(()=>{
    getIdea()
  },[])

  return (
    <div className='grid'>
        {
          
            idea?
            <>
        <IdeaHero title={idea.title} tagline={idea.tagline}/>
      <IdeaDescription description={idea.description} image={idea.image} author={idea.author} type={idea.plan} />
     </>  :<Error message={'Oops... No Such Idea Found'}/>
       }

    </div>
  )
}

export default IdeaPage
