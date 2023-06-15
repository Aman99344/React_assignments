import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Routing/Home";
import About from "./Components/Routing/About";
import Contact from "./Components/Routing/Contact";
import Product from "./Components/Routing/Product";
import './App.css';

function App() {
  return (
    <>
    <Navbar />
     <div className="App">

      <Routes>
             <Route path="/"  element={<Home />}/>
             <Route path="/About"  element={<About />}/>
             <Route path="/Contact"  element={<Contact />}/>
             <Route path="/Product"  element={<Product />}/>
      </Routes>
    
      </div>
    </>
   
  );
}

export default App;
