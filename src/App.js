import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import Hero from "./components/hero";
import Form from "./components/form"
import Ideas from "./components/ideas";
import './input.css';
function App() {
 const [ideas,setIdeas]=useState(null)

 const getIdeas=async()=>{
   const fetched= await fetch('http://127.0.0.1:8000/api/ideas')
   const result=await fetched.json()
   setIdeas(result)
 }

useEffect(()=>{
  getIdeas()
  
  
},[])
const submitForm=(value)=>{
    //setIdeas(value)
    setIdeas(value)
    console.log(value)
}
console.log(ideas)
return (
    <div className="App" >
     <Navbar/>
     
     <Hero  />
     <Ideas ideas={ideas}/>
     
       </div>
  );
}

export default App;
