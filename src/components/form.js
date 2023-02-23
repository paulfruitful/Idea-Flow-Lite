import React from 'react'

const form = () => {
  return (
    <div>
      <form className='grid  p-6 shadow-sm  justify-items-center '>
        <div className='flex flex-col justify-self-center'>
            <div className='p-6 mt-3 flex flex-row'><label className='font-bold text-md'>Write Your Hero</label> <input name='hero' placeholder='Best Restaurant'></input></div>
        </div>
      </form>
    </div>
  )
}

export default form
