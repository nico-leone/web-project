import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {  BrowserRouter, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Login from './login';
import Signup from './signup';
import CreateProject from './CreateProject';
import CreateTeam from './CreateTeam';
import ViewProjects from './ViewProjects';
import ViewTeams from './ViewTeams';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter  (
  createRoutesFromElements(
    <>
    <Route path = "/" element = {<Login/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/Signup" element = {<Signup/>}/>
    <Route path = "/CreateProject" element = {<CreateProject/>}/>
    <Route path = "/CreateTeam" element = {<CreateTeam/>}/>
    <Route path = "/ViewProjects" element = {<ViewProjects/>}/>
    <Route path = "/ViewTeams" element = {<ViewTeams/>}/>
    </>
  )
)


root.render(
  <React.StrictMode>
    <RouterProvider router = {router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))x`
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
