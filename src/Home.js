import React from 'react'
import Hero from './components/hero'
import Ideas from './components/ideas'
import { useContext } from 'react'
import { DataContext } from './App'
const Home = ({hero}) => {
  const {topIdeas}=useContext(DataContext)
  return (
    <div>
       <Hero  text={hero} />
     <Ideas ideas={topIdeas}/>
    </div>
  )
}

export default Home
