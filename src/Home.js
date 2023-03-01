import React from 'react'
import Hero from './components/hero'
import Ideas from './components/ideas'
import { useContext } from 'react'
import { DataContext } from './App'
const Home = () => {
  const {ideas}=useContext(DataContext)
  return (
    <div>
       <Hero  />
     <Ideas ideas={ideas}/>
    </div>
  )
}

export default Home
