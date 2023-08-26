// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import DashboardPage from './views/DashboardPage'
import CreatePage from './views/CreatePage'
import DetailsPage from './views/DetailsPage'
import EditPage from './views/EditPage'

function App() {
  return (
    <div className="App">
      <h1> Travel Adviser</h1>

      <Routes>
        <Route path="/destinations" element = {<DashboardPage />}/>
        <Route path="/destinations/new" element = {<CreatePage />}/>
        <Route path="/destinations/:id" element = {<DetailsPage />}/>
        <Route path="/destinations/:id/edit" element = {<EditPage />}/>

      </Routes>
    </div>
  );
}

export default App;
