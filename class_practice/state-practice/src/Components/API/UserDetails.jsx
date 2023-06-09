import React from 'react'

const UserDetails = ({userData}) => {
  return (
    <div>
        <table cellSpacing={25} style={{width: "70%", boxShadow: "0 0 10px black", margin: "50px auto"}}>
          <thead style={{backgroundColor: "black", color: "white"}}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody align = "center">
            {
              userData.map((ele) => {
                return <tr>
                   <td>{ele.name}</td>
                   <td>{ele.email}</td>
                   <td>{ele.address.city}</td>
                </tr>
              })
            }

          </tbody>

        </table>
    </div>
  )
}

export default UserDetails;