import React from 'react';
import Main from './views/Main';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>


    </div>
  );
}
export default App;