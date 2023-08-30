import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
//import main
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import JobUpdate from './views/JobUpdate';

import { getJobList } from './utils/utils';
import JobDetails from './views/JobDetails';

function App() {
  const [jobList, setJobList] = useState([]);
  // create a function that executes a callback ONLY if the dependencies have changed between rendering
  // must have 2 arguments
  useEffect(() => {
    getJobList(setJobList);
  }, []);

  // callback function to update list after creating a new product
  const handleNewJobCreate = () => {
    getJobList(setJobList);
  };
  
  const updateOnDom = () => {
    getJobList(setJobList);
  }

  const removeFromDom = (id) => {
    // setting the state to a copy of the state by filtering out the product with specified id
    setJobList(jobList.filter(job => job._id !== id));
}; 

  return (
    <div className="App container">
      <h1 className="mt-4 text-light"> Jobs Board </h1>
      <Routes>
        <Route path='/' element={<JobList jobList={jobList} removeFromDom={removeFromDom} />}/>
        <Route path='/job/:id' element={<JobDetails removeFromDom={removeFromDom}/>}/>
        <Route path='/job/new' element={<JobForm onCreate={handleNewJobCreate} />} />
        <Route path='/job/edit/:id' element={<JobUpdate updateOnDom={updateOnDom} removeFromDom={removeFromDom}/>} />
        {/* more routes to be added later as we do our crud */}
      </Routes>

    </div>
  );
}
export default App;