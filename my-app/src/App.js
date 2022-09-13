import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/login';
import Dash from './Components/Dash';
import Client from './Components/Client/Getclient';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Projectdetails from './Components/ProjectDetails/ViewProject';
import FullProject from './Components/ProjectDetails/ProjectDetails';
import ViewProjectgetbyid from './Components/ProjectDetails/projectgetbyid';
import AllProjectTeamdetails from './Components/ProjectTeam/AllDetailsofTeam';
import Team from './Components/ProjectTeam/Team';
import TeamandClient from './Components/ProjectTeam/teamandclientdetails';
import Feedback from './Components/ProjectTeam/feedback';
import Front from './Components/front';
function App() {
  return (
   
    <BrowserRouter>
    <div>
     
    
      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Dash' element={<Dash/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/project' element={<Projectdetails/>}/>
        <Route path='/projectDetails' element={<FullProject/>}/>
        <Route path='/Projectgetbyid' element={<ViewProjectgetbyid/>}/>
        <Route path='/AllProjectTeamdetails' element={<AllProjectTeamdetails/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/TeamandClient' element={<TeamandClient/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
