import React from 'react'
const Hero = ({text}) => {
  return (
 <div>
      <div className="grid justify-self-stretch justify-items-center mt-3 mb-6  bg-gradient-to-r from-cyan-500 to-blue-700 w-full" style={{height:'400px'}}>
        <div className=" justify-self-center m-auto">
           <div className="m-auto flex flex-col">
             <p className="text-3xl lg:text-5xl text-white m-auto font-bold ">{text}</p>
             <p className="text-xl text-center lg:flex lg:flex-row  p-6 mb-4" style={{color:' #ffffff'}}>By Reading Ideas, Solutions and Problems </p>
            
           </div>
        </div>
      </div>
 </div>
  )
}

export default Hero
