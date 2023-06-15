import './App.css';
import Home from './Components/Github/Home';
import Navbar from "./Components/Navbar/Navbar"
import { CustomGithubProvider } from './Components/Github/Context';

function App() {
  return (
    <div >
      <Navbar />
      <CustomGithubProvider>
      <Home />
      </CustomGithubProvider>
    </div>
  );
}

export default App;
