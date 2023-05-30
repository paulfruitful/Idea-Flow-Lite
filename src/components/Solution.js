import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Solution=()=>{
const [solution,setSolution]=useState([])
const {id}=useParams()

useEffect(async()=>{
    const fetch=await fetch()
    const res=await fetch.json()
    setSolution(res)
},[])


}