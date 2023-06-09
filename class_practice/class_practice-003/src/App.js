// import Pagination from './Components/Pagination/Pagination';
import ImageComp from './Components/ImageComp/ImageComp';
import TextComp from './Components/TextComp/TextComp';
import './App.css';
import { useState } from 'react';

function App() {
 
  const [showImage, setShowImage] = useState(false)

  return (
    <div className="App">
      
    {/* <Pagination /> */}

   <button onClick={()=>{setShowImage(true)}} style={{margin: "10px"}}>Show image</button>
   <button onClick={()=>{setShowImage(false)}} style={{margin: "10px"}}>Show Text</button>

   {
    showImage ? <ImageComp /> :<TextComp />
   }

    {/* <ImageComp />
    <TextComp /> */}
    </div>
  );
}

export default App;
