import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from  'react-router-dom'
//import main
// import Main from './views/Main';
// import axios from 'axios';
import AuthorForm from './components/AuthorForm';
import AuthorList from "./components/AuthorList";


import { getAuthorList } from './utils/utils';
import AuthorUpdate from './views/AuthorUpdate';

function App() {
  const [authorList, setAuthorList] = useState([]);

    // create a function that executes a callback ONLY if the dependencies have changed between rendering
    // must have 2 arguments
    useEffect(() => {
        getAuthorList(setAuthorList);
    }, []);

    
    // callback function to update list after creating a new product
    const handleNewAuthorCreate = () => {
        getAuthorList(setAuthorList);
    };

    const updateOnDom = () => {
        getAuthorList(setAuthorList);
    }


    const removeFromDom = (id) => {
      // setting the state to a copy of the state by filtering out the product with specified id
      setAuthorList(authorList.filter(author => author._id !== id));
  }; 
  return (
    <div className="App container">
      <h1 className="mt-4 text-light"> Favorite authors </h1>
      <Routes>
        <Route path='/' element={<AuthorList authorList={authorList} removeFromDom={removeFromDom} />}/>
        <Route path='/authors/new' element={<AuthorForm onCreate={handleNewAuthorCreate}/>} />
        <Route path='/authors/edit/:id' element={<AuthorUpdate updateOnDom={updateOnDom}/>} />
        
        
        {/* more routes to be added later as we do our crud */}
      </Routes>

    </div>
  );
}
export default App;