import Product from './Components/Product/Product';
import Navbar from "./Components/Navbar/Navbar"
import ProductList from './Components/Product/ProductList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Product />
      <ProductList />
    </div>
   
  );
}

export default App;
