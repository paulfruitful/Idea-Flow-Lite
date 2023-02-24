import React from 'react'

const Navbar = () => {
  return (
    <div className='grid justify-self-stretch  p-6 shadow-md bg-white'>
      <a href={'#'} className=' justify-self-start '><span className='text-3xl font-bold '>Idea Flow</span></a>
      <div className=' justify-self-center'>
         <div className='hidden  lg:flex flex-row' style={{marginTop:"-20px" }}>
          
            <li className='mx-4 hover:p-3 hover:text-red-600 list-none font-bold'>Ideas</li>
            <li className='mx-4 hover:p-3 hover:text-red-600  list-none font-bold'>Solutions</li>
            <li className='mx-4 hover:p-3 hover:text-red-600 list-none font-bold'>Problems</li>
           
             </div>
      </div>
      <div className='flex flex-col lg:hidden absolute top-0 left-0 bg-white shadow-sm' style={{height:'100vh',display:'none'}}>
     
          
      <li className='mx-4 hover:p-3 hover:text-red-600 list-none font-bold'>Ideas</li>
            <li className='mx-4 hover:p-3 hover:text-red-600  list-none font-bold'>Solutions</li>
            <li className='mx-4 hover:p-3 hover:text-red-600 list-none font-bold'>Problems</li>
          
      </div>
    </div>
  )
}

export default Navbar
