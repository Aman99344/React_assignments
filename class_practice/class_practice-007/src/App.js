import Navbar from "./Components/Navbar/Navbar"
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Routing/Home";
import About from "./Components/Routing/About";
import Contact from "./Components/Routing/Contact";
import Product from "./Components/Routing/Product";
import Electronic from "./Components/Routing/Electronic"
import Jewellery from "./Components/Routing/Jewellery"
import MensClothing from "./Components/Routing/MensClothing";
import WomansClothing from "./Components/Routing/WomansClothing";
import ProductDetails from "./Components/Routing/ProductDetails";

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


           <Route path="/product"  element={<Product />}>
               <Route path="" element={<Navigate to="electronic" />} />
               <Route path="electronic" element={<Electronic />} /> 
               <Route path="Jewellary" element={<Jewellery />} /> 
               <Route path="Mens'Clothings" element={<MensClothing />} /> 
               <Route path="Woman'sClothings" element={<WomansClothing />} /> 
           </Route>

               <Route path="/productdetails/:id" element={<ProductDetails />}/>

      </Routes>
    
      </div>
    </>
   
  );
}

export default App;
