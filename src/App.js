import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import Hero from "./components/hero";
import './input.css';
function App() {
 const [ideas,setIdeas]=useState('Hello')

useEffect(()=>{
   fetch('http://127.0.0.1:8000/api/ideas')
   .then((res)=>res.json())
   .then(data=>setIdeas(data))},[])

console.log(ideas)
  return (
    <div className="App" >
     <Navbar/>
     <Hero onClick={()=>setIdeas('Me')}/>
   
    </div>
  );
}

export default App;
