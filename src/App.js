import Navbar from "./components/Navbar";
import { useState,useLayoutEffect,createContext } from "react";
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './Home'
import IdeaPage from "./components/IdeaPage";
import Form from "./components/form"
import IdeaPool from "./components/ideaPool";
import './input.css';

export const DataContext= createContext(null);

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

useLayoutEffect(()=>{
  getIdeas()
  getTopIdeas()

},[])
const submitForm=(value)=>{
    //setIdeas(value)
    setIdeas(value)
    console.log(value)
}

return (
  <>
  <DataContext value={{topIdeas,ideas}}>    
    <div className="App" >
     
    <Navbar/>
     <Routes>
      <Route path="/ideas">
        <Route index element={<IdeaPool/>}/>
        <Route path=":id" element={<IdeaPage/>}/>
      </Route>
      <Route path="/" element={<Home />}/>
     </Routes>
    
     
       </div>
     </DataContext>

      </>
  );
}

export default App;
