import Navbar from "./components/Navbar";
import { useState,useLayoutEffect,createContext } from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Form from "./components/form";
import IdeaPage from "./components/IdeaPage";
import IdeaPool from "./components/ideaPool";
//import Form from "./components/form"

import './input.css';

export const DataContext= createContext(null);

function App() {

 const [topIdeas,setTopIdeas]=useState(null)
 const [ideas,setIdeas]=useState(null)
const [hero,setHero]=useState('Get Inspired')
 //Get Ideas For The Idea Pool Component
 const getIdeas=async()=>{
   const fetched= await fetch('http://127.0.0.1:8000/api/ideas')
   const result=await fetched.json()
   const res=result.ideas
  
   setIdeas(res)
 }

 //Get Ideas For The Idea Pool Component
 const getTopIdeas=async()=>{
  const fetched= await fetch('http://127.0.0.1:8000/api/ideas')
  const result=await fetched.json()
  const res=result.topIdeas
  setTopIdeas(res)
  
}

useLayoutEffect(()=>{
  getIdeas()
  getTopIdeas()

},[])
function  submitForm(){
  console.log('Hey')
}

return (
  <DataContext.Provider value={{topIdeas,ideas}}>    
  <>
    <div className="App" >
     
    <Navbar/>
    
     <Routes>
     <Route path="/ideas">
        <Route index element={<IdeaPool/>}/>
        <Route path=":id" element={<IdeaPage/>}/>
      </Route>
     
      <Route path="/" element={<Home hero={hero}/>}/>
     </Routes>
    
     
       </div>
   

      </> 
       </DataContext.Provider>
  );
}

export default App;
