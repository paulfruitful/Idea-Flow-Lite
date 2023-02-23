import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import Hero from "./components/hero";
import Form from "./components/form"
import './input.css';
function App() {
 const [ideas,setIdeas]=useState([])

 const getIdeas=async()=>{
   const fetched= await fetch('http://127.0.0.1:8000/api/ideas')
   const result=await fetched.json()
   setIdeas(result)
 }

/*useEffect(()=>{
  getIdeas()
  
},[])
*/

console.log(ideas)
  return (
    <div className="App" >
     <Navbar/>
     <Hero />
     <Form/>
       </div>
  );
}

export default App;
