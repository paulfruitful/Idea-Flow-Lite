import React from 'react'
import Hero from './components/hero'
import Ideas from './components/ideas'
const Home = ({ideas}) => {
  return (
    <div>
       <Hero  />
     <Ideas ideas={ideas}/>
    </div>
  )
}

export default Home
