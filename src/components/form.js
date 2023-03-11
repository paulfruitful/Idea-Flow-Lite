
import { useState,useRef} from 'react'

const Form = ({submitForm}) => {
  const value=useRef()
 const changeHero=()=>{
    submitForm()
  
 }
  return (
    <div>
      <form className='grid  p-6 shadow-sm  justify-items-center ' onSubmit={(e)=>{
          e.preventDefault()
          changeHero()
}}>
        <div className='flex flex-col justify-self-center'>
            <div className='p-6 mt-3 flex flex-row'><label className='font-bold text-md m-4'>Write Your Hero</label> <input name='input' placeholder='Best Restaurant' ref={value}></input> <button className='p-2 rounded-md bg-black text-white font-bold text-sm' value={'Submit'}>Submit</button></div>
        </div>
      </form>
    </div>
  )
}

export default Form
