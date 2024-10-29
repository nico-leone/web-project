import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import CreateProject from './CreateProject';
import CreateTeam from './CreateTeam';
import ViewProjects from './ViewProjects';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element= {<Login />}></Route>
      <Route path= "/login" element= {<Login />}></Route>
      <Route path= "/signup" element= {<Signup />}></Route>
      <Route path = "/CreateProject" element = {<CreateProject/>}></Route>
      <Route path = "/CreateTeam" element = {<CreateTeam/>}></Route>
      <Route path = "/ViewProjects" element = {<ViewProjects/>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
