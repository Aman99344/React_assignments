
import { useState, useContext} from 'react'
import AuthContext from './Context'


const Login = () => {

    const {login} = useContext(AuthContext)

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const verifyLogin = () =>{
        if(user.name === "aman" && user.password ==="aman123"){
           login()
        }else{
            alert("Enter Correct Details")
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Login Components</h2>
            <div style={{ width: "40%", height: "170px", boxShadow: "0 0 10px black", margin: "10px auto", padding: "50px" }}>
                <div style={{ margin: "20px auto" }}>

                    <input  type="text" placeholder='Enter Username' onChange={(event) => {
                        setUser({
                            ...user,
                            name: event.target.value
                        }
                        )
                    }}  />

                </div>

                <div style={{ margin: "20px auto" }}  >
                    <input type="text" placeholder='Enter Password' onChange={(event)=>{
                        setUser({
                            ...user,
                            password: event.target.value
                        })
                    }} />

                </div>
                <button onClick={verifyLogin}>Login</button>

            </div>
        </div>
    )
}

export default Login