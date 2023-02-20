import Navbar from "./components/Navbar";
import { useState } from "react";
import Hero from "./components/hero";
import './input.css';
function App() {
 const [ideas,setIdeas]=useState('Hello')

const top= async ()=>{
  const res=await fetch('http://127.0.0.1:8000/api/ideas')
  const result=res.json()
  return result
}

console.log(top())

  return (
    <div className="App" >
     <Navbar/>
     <Hero onClick={()=>setIdeas('Me')}/>
   <p>{ideas}</p>
    </div>
  );
}

export default App;
