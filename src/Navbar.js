import React from 'react'


const Navbar = () => {
  return (
    <div className='grid justify-self-stretch  p-6 shadow-md bg-white'>
      <a hrefLang='jolbist.com' className=' justify-self-start ml-3'><span className='text-3xl font-bold'>JuEats</span></a>
      <div className=' justify-self-end'>
         <div className='flex flex-row'>
          
            <li className='mx-4 list-none font-bold'>About Us</li>
            <li className='mx-4 list-none font-bold'>Services</li>
            <li className='mx-4 list-none font-bold'>Menu</li>
            <li className='mx-4 list-none fon-bold'>Contact Us</li>
             </div>
      </div>
    </div>
  )
}

export default Navbar
