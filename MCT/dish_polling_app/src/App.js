import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Tab1 from './Components/Tab1';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="App">
      {!currentUser ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          <h2>Welcome, {currentUser.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <div>
            <Tab1 />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
