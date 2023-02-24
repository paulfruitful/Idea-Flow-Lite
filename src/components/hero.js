import React from 'react'
import BTN from './snippets/clickBTN'
const Hero = ({text}) => {
  return (
 <div>
      <div class="grid justify-self-stretch justify-items-center mt-3 mb-6  bg-gradient-to-r from-cyan-500 to-blue-700 w-full" style={{height:'400px'}}>
        <div class=" justify-self-center m-auto">
           <div class="m-auto flex flex-col">
             <p class="text-3xl lg:text-5xl text-white m-auto font-bold "><span class="">Let Your</span>  Ideas Flow </p>
             <p class="text-xl text-center lg:flex lg:flex-row  font-bold p-6 mb-4" style={{color:' #ffffff'}}>Share Your Ideas <span class="hidden lg:flex">, Offer Your Solutions and Report Your Problems</span> </p>
            
           </div>
        </div>
      </div>
 </div>
  )
}

export default Hero
