import React from 'react'

const IdeaHero = ({title,tagline}) => {
  return (
    <div>
           <div className="grid justify-self-stretch justify-items-center mt-3 mb-6  bg-gradient-to-r from-cyan-500 to-blue-700 w-full" style={{height:'400px'}}>
        <div className=" justify-self-center m-auto">
           <div className="m-auto flex flex-col">
             <p className="text-3xl lg:text-4xl text-white m-auto font-bold ">{title}</p>
             <p className="text-xl text-center   p-6 mb-4" style={{color:' #ffffff'}}>{tagline}</p>
            
           </div>
        </div>
      </div>
 </div>
  
  )
}

export default IdeaHero
   