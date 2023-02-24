import React from 'react'
import BTN from './snippets/clickBTN'
const Hero = ({text}) => {
  return (
    <div className='w-full grid justify-self-center justify-items-center bg-black' style={{height:'50vh'}}>
        <h1 className='text-center font-bold text-white text-3xl'>{text}</h1>
       <div className='jusify-self-center'> 
      <BTN  value="Learn More"/>
      </div>
    </div>
  )
}

export default Hero
