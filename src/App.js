import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Form from "./components/form"
import IdeaPool from "./components/ideaPool";
import './input.css';
function App() {
 const [topIdeas,setTopIdeas]=useState(null)
 const [ideas,setIdeas]=useState(null)

 //Get Ideas For The Idea Pool Component
 const getIdeas=async()=>{
   const fetched= await fetch('http://127.0.0.1:8000/api/ideas')
   const result=await fetched.json()
   setIdeas(result)
 }

 //Get Ideas For The Idea Pool Component
 const getTopIdeas=async()=>{
  const fetched= await fetch('http://127.0.0.1:8000/api/topIdeas')
  const result=await fetched.json()
  setTopIdeas(result)
  
}

useEffect(()=>{
  getIdeas()
  getTopIdeas()
  console.log(ideas)
  
},[])
const submitForm=(value)=>{
    //setIdeas(value)
    setIdeas(value)
    console.log(value)
}

return (
  <>
  
    <div className="App" >
     
    <Navbar/>
     <Routes>
      <Route path="/ideas">
        <Route index element={<IdeaPool ideas={ideas}/>}/>
      </Route>
      <Route path="/" element={<Home ideas={topIdeas}/>}/>
     </Routes>
    
     
       </div>
     
      </>
  );
}

export default App;
