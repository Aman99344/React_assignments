import Navbar from "./Components/Navbar/Navbar"
import Login from "./Components/ContextProvider/Login";
import Home from "./Components/ContextProvider/Home";
import { useContext } from "react";
import AuthContext from "./Components/ContextProvider/Context";
import './App.css';

function App() {

   const {isLoggedIn} = useContext(AuthContext)

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // const login = () =>{
  //   setIsLoggedIn(true)
  // }

  // const logout =()=>{
  //   setIsLoggedIn(false)
  // }

//   return (
//     <div className="App">
//         <Navbar isLoggedIn={isLoggedIn} logout={logout} />
//        {
//         isLoggedIn ? <Home /> : <Login login={login} />
//        }
//     </div>
//   );
// }

return (
  <div className="App">
      <Navbar />
     {
      isLoggedIn ? <Home /> : <Login />
     }
  </div>
);
}


export default App;
