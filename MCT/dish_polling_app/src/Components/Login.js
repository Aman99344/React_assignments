import React, { useState } from 'react';
import users from './users.json';
import "./Login.css"


function Login({handleLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
  
      if (user) {
        handleLogin(user);
        setError('');
      } else {
        setError('Invalid username or password');
      }
    }

    return (
        <div className='loginContainer'>
            <div className='inputContainer'>
                <h2>USER LOGIN</h2>
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" />
                <button onClick={handleSubmit}>Login</button>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default Login;