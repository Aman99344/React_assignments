import axios from "axios"




export const getUserData =(setUsers) =>{

    axios.get("http://localhost:5005/results")
    .then((res)=>{
        setUsers(res.data)
    })
    .catch((error)=>{
        alert("Failed to get User")
    })


}

export const sendUserDetails = (newUser, setUsers)=>{
    
    axios.post("http://localhost:5005/results", newUser)
    .then((res)=>{
        alert("User Added")
        getUserData(setUsers)
    })

    .catch((error)=>{
        alert("Failed to add user")
    })
}



export const deleteUserData =(id, setUsers)=>{
    axios.delete(`http://localhost:5005/results/${id}`)
    .then(()=>{
        alert("Removed Successfully")
        getUserData(setUsers);
    })
    .catch(()=>{
      alert("Failed to Delete")
    })
}

