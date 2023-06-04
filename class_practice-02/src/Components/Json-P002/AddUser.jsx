import "../Json-P002/AddUser.css"
import { useState } from "react";
import { sendUserDetails , getUserData, deleteUserData  } from "./Api";

const AddUser = () => {


    const [user, setUser] = useState("");
    const [gender, setGender] = useState("");
    const [users, setUsers] = useState([]);

    const addUserDetails = () => {
        // console.log(user , gender)

        let newUser = {
            name: user,
            gender: gender,
        };

        sendUserDetails(newUser, setUsers)
    }

    const getUser = () => {
       getUserData(setUsers) 
    }

    const deleteUser =(id) =>{
        deleteUserData(id, setUsers)
    }
 

    return (
        <div className="container">
            <h2>Add user Details</h2>
            <div className="inputDiv">
                <input onChange={((e) => { setUser(e.target.value) })} type="text" />
            </div>
            <div className="inputDiv">
                <input onChange={((e) => { setGender(e.target.value) })} type="radio" name="gender" value="male" />Male
                <input onChange={((e) => { setGender(e.target.value) })} type="radio" name="gender" value="Female" />Female
            </div>
            <button onClick={addUserDetails}>Add User</button>
            <button className="btn" onClick={getUser}>Get User</button>


            <div>
                {
                    users.length > 0 &&        
                    <table width= "100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                               users.map((ele)=>{
                                 return(
                                    <tr>
                                    <td>{ele.name}</td>
                                    <td>{ele.gender}</td>
                                    <td><button onClick={()=>{deleteUser(ele.id)}}>Delete</button></td>
                                  </tr>
                                 )
                               })
                            }

                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default AddUser;