import React from 'react'

const Navbar = () => {
  return (
    <div className='grid justify-self-stretch  p-6 shadow-md bg-white'>
      <a href={'#'} className=' justify-self-start '><span className='text-3xl font-bold '>JuEats</span></a>
      <div className=' justify-self-center'>
         <div className='hidden  lg:flex flex-row' style={{marginTop:"-20px" }}>
          
            <li className='mx-4 hover:p-3 hover:text-red-600 list-none font-bold'>About Us</li>
            <li className='mx-4 hover:p-3 hover:text-red-600  list-none font-bold'>Services</li>
            <li className='mx-4 hover:p-3 hover:text-red-600 list-none font-bold'>Menu</li>
            <li className='mx-4 hover:p-3 hover:text-red-600 list-none font-bold'>Contact Us</li>
             </div>
      </div>
      <div className='flex flex-col lg:hidden absolute top-0 left-0 bg-white shadow-sm' style={{height:'100vh'}}>
     
          
          <li className='m-4 hover:p-3 hover:text-red-600 list-none font-bold'>About Us</li>
          <li className='m-4 hover:p-3 hover:text-red-600  list-none font-bold'>Services</li>
          <li className='m-4 hover:p-3 hover:text-red-600 list-none font-bold'>Menu</li>
          <li className='m-4 hover:p-3 hover:text-red-600 list-none font-bold'>Contact Us</li>
          
      </div>
    </div>
  )
}

export default Navbar
