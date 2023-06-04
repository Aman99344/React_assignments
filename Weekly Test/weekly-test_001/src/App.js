import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Main from './Components/Main/MainSec/Main.jsx';
import Feature from './Components/Main/FeatureSec/Feature';
import Achievements from './Components/Main/Achievements/Achievements';
import { faDesktop, faUser, faRecycle, faBriefcase, faAutomobile, faTrophy} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
        <Navbar />
        <Main />
        <h1 style={{textAlign: "center", margin: "30px 0"}}>Our Features</h1>
        <div  style={{display: "flex"}}>
            <Feature icons={faDesktop} heading= "Fully Responsive"/>
            <Feature icons={faUser}    heading="Trusted Author" />
            <Feature icons={faRecycle} heading= "Reusable Elements"/>
        </div>

      <div className='acchievments-Container'>
        <Achievements num={45} para= "Award Winnning" icons={faTrophy} />
        <Achievements num={145} para= "Finished Projects" icons={faBriefcase} />
        <Achievements num={349} para= "Product Sold" icons={faAutomobile}/>
        <Achievements num={2456} para= "Twitter Fans" icons={faTwitter}/>
      </div>
        
    </div>
  );
}

export default App;
