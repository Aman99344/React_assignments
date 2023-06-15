import { createContext, useState,  } from "react";

let myGithubContext = createContext();

export default myGithubContext;


export const CustomGithubProvider =({children})=>{
    const[data, setData] = useState({})

    const addData =(userData)=>{
        setData(userData)
    }

    return(
        <div>
          <myGithubContext.Provider value={{data, addData}}>
           {children}
          </myGithubContext.Provider>
        </div>
    )
}