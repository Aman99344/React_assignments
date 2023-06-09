import React from 'react'
import { useState } from 'react'
import UserDetails from './UserDetails'
import Api from './Api'


 const User = () => {

  let [user, setUser] = useState([])

  const addUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
      })
  }

    const removeUser = () => {
    setUser([])
  }
  
  return (
    
    <div style={{ padding: "20px", width: "70%", margin: "10px auto",}}>
  
  <Api addUser={addUser} removeUser={removeUser}  />

      {user.length > 0 && <UserDetails userData ={user} />

      }

    </div>

  )

}



export default User;