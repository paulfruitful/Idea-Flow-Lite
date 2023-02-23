import React, { useEffect } from 'react'
import { useState} from 'react'

const Form = ({onValue}) => {
   let [hero,setHero]=useState('')

   useEffect(()=>{
    console.log(hero)
   },[hero])

  return (
    <div>
      <form className='grid  p-6 shadow-sm  justify-items-center ' onSubmit={()=>{onValue(hero)}}>
        <div className='flex flex-col justify-self-center'>
            <div className='p-6 mt-3 flex flex-row'><label className='font-bold text-md m-4'>Write Your Hero</label> <input name='hero' placeholder='Best Restaurant' onChange={()=>{setHero(document.getElementsByName('hero').value)}}></input> <button className='p-2 rounded-md bg-black text-white font-bold text-sm' value={'Submit'}>Submit</button></div>
        </div>
      </form>
    </div>
  )
}

export default Form
