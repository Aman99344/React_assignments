import React from 'react'

const UserTable = ({user}) => {
  return (
   
    <div style={{ textAlign: "left", margin: "15px 0"}}>
    {
      user.length > 0 &&  <table cellSpacing={0} width= "100%">
      <thead >
          <tr style={{backgroundColor: "black", color: "white"}}>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>GENDER</th>
          </tr>
      </thead>

      <tbody>
            {
              user.map((user)=>{
                  return(
                      <tr>
                          <td><img src={user.picture.medium} alt="userImage" width={100} /></td>
                          <td>{user.name.first} {user.name.last}</td>
                          <td>{user.email}</td>
                          <td>{user.gender}</td>
                      </tr>
                      
                  )

              })
            }
        
      </tbody>


     </table>
    }
    </div>

  )
}

export default UserTable