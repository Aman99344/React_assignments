import axios from "axios"
import { useEffect } from "react"

export const UserData =({setUser, setState})=>{
    useEffect(()=>{
        
    axios.get("https://randomuser.me/api/?results=20")
    .then((res)=>{
        setUser(res.data.results)
        setState(res.data.results)
        console.log(res.data.results)
    })
    .catch(()=>{
        alert("Failed to Fetch Data")
    })


    },[setState, setUser])
}