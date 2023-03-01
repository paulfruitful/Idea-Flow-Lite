import React from 'react'
import Hero from './components/hero'
import Ideas from './components/ideas'
import { useContext } from 'react'
import { DataContext } from './App'
const Home = () => {
  const {topIdeas}=useContext(DataContext)
  return (
    <div>
       <Hero  />
     <Ideas ideas={topIdeas}/>
    </div>
  )
}

export default Home
