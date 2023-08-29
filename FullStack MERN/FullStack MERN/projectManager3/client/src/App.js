import React from 'react';
import './App.css';
import {Routes, Route} from  'react-router-dom'
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import ProductUpdate from './views/ProductUpdate';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products/:id' element ={<ProductDetails/>}/>
        <Route path="/products/edit/:id" element={<ProductUpdate/>}/>
      </Routes>

    </div>
  );
}

export default App;
