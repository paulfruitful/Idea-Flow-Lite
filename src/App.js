import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import Hero from "./components/hero";
import Ideas from "./components/ideas";
import './input.css';
function App() {
 const [ideas,setIdeas]=useState([{
  key:1,
  author: "pauloman",
  description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  email
  : 
  "fruitful2007@outlook.com",
  id
  : 
  "983b1802-8dce-4252-8bf3-0982e8d3bf8f",
  image
  : 
  "https://c1.wallpaperflare.com/preview/260/237/126/59687788344d1.jpg",
 
  sponsor:  "true",
  tagline:"An app to solve health problems.",
  title:"Logistar",
   upvote : null,
  user_id: 
  "98215c39-cb1c-426c-a816-25d2c381279c"}])

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
    <Ideas ideas={ideas}/>
    </div>
  );
}

export default App;
