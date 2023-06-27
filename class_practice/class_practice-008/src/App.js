import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Routing/Home";
import Product from "./Components/Routing/Product";
import Cart from "./Components/Routing/Cart";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
